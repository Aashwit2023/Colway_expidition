import cloudinary from '../config/cloudinary.js';

// In-memory cache for Cloudinary asset discovery (30s TTL for fast sync)
const cache = new Map();
const CACHE_TTL_MS = 30 * 1000; // 30 seconds

/**
 * Clean and format Cloudinary asset response for frontend consumption
 */
const formatAsset = (asset) => {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME || 'n2tlqhzj';
  const versionSegment = asset.version ? `v${asset.version}/` : '';
  const optimizedUrl = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${versionSegment}${asset.public_id}`;
  return {
    publicId: asset.public_id,
    folder: asset.asset_folder || asset.folder || (asset.public_id.includes('/') ? asset.public_id.substring(0, asset.public_id.lastIndexOf('/')) : ''),
    format: asset.format,
    version: asset.version,
    resourceType: asset.resource_type || 'image',
    type: asset.type || 'upload',
    width: asset.width,
    height: asset.height,
    bytes: asset.bytes,
    aspectRatio: asset.width && asset.height ? +(asset.width / asset.height).toFixed(2) : null,
    createdAt: asset.created_at,
    url: optimizedUrl,
    rawUrl: asset.secure_url || asset.url,
    optimizedUrl
  };
};

/**
 * Normalize folder name to handle modern asset folders and legacy paths
 */
const normalizeFolderName = (folder) => {
  if (!folder) return 'Colway treks/Expeditions';
  const trimmed = folder.trim();
  const lower = trimmed.toLowerCase();
  
  if (lower === 'expeditions' || lower === 'colway_expeditions/expeditions' || lower === 'colway treks/expeditions') {
    return 'Colway treks/Expeditions';
  }
  if (lower === 'banners' || lower === 'colway_expeditions/banners' || lower === 'colway treks/banners') {
    return 'Colway treks/Banners';
  }
  if (lower === 'treks' || lower === 'colway_expeditions/treks') {
    return 'colway_expeditions/treks';
  }
  return trimmed;
};

/**
 * GET /api/media
 * Fetch assets dynamically by folder or prefix
 * Supports modern asset folders (e.g. "Colway treks/Expeditions") and legacy prefixes
 */
export const getMediaAssets = async (req, res) => {
  try {
    const { folder, prefix, max_results = 50, next_cursor } = req.query;
    const targetFolder = normalizeFolderName(folder || prefix);
    const limit = Math.min(parseInt(max_results, 10) || 50, 100);
    const cacheKey = `assets_${targetFolder}_${limit}_${next_cursor || ''}`;

    const cached = cache.get(cacheKey);
    if (cached && (Date.now() - cached.timestamp < CACHE_TTL_MS)) {
      return res.status(200).json({
        success: true,
        source: 'cache',
        total: cached.data.resources.length,
        next_cursor: cached.data.next_cursor,
        resources: cached.data.resources
      });
    }

    let rawResources = [];
    let nextCursor = null;

    // 1. Try modern asset folder API first (e.g. "Colway treks/Expeditions")
    try {
      const folderResult = await cloudinary.api.resources_by_asset_folder(targetFolder, {
        max_results: limit,
        ...(next_cursor ? { next_cursor } : {})
      });
      if (folderResult?.resources?.length) {
        rawResources = folderResult.resources;
        nextCursor = folderResult.next_cursor || null;
      }
    } catch (folderErr) {
      // Continue to search/prefix fallback
    }

    // 2. Fallback to search expression if asset folder lookup returned empty
    if (!rawResources.length) {
      try {
        const searchResult = await cloudinary.search
          .expression(`asset_folder:"${targetFolder}" OR folder:"${targetFolder}"`)
          .max_results(limit)
          .execute();
        if (searchResult?.resources?.length) {
          rawResources = searchResult.resources;
          nextCursor = searchResult.next_cursor || null;
        }
      } catch (searchErr) {
        // Continue to prefix fallback
      }
    }

    // 3. Fallback to standard prefix lookup
    if (!rawResources.length) {
      try {
        const prefixResult = await cloudinary.api.resources({
          type: 'upload',
          prefix: targetFolder,
          max_results: limit,
          ...(next_cursor ? { next_cursor } : {})
        });
        if (prefixResult?.resources?.length) {
          rawResources = prefixResult.resources;
          nextCursor = prefixResult.next_cursor || null;
        }
      } catch (prefixErr) {
        // Final fallback failed
      }
    }

    const formattedResources = rawResources.map(formatAsset);
    const responsePayload = {
      resources: formattedResources,
      next_cursor: nextCursor
    };

    cache.set(cacheKey, { timestamp: Date.now(), data: responsePayload });

    return res.status(200).json({
      success: true,
      source: 'cloudinary',
      total: formattedResources.length,
      next_cursor: nextCursor,
      resources: formattedResources
    });
  } catch (error) {
    console.error('Cloudinary media retrieval error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to fetch media assets from Cloudinary'
    });
  }
};

/**
 * GET /api/media/folder/:folderName
 * Direct convenience endpoint for fetching a named folder
 * Example: /api/media/folder/Expeditions or /api/media/folder/Banners
 */
export const getMediaByFolder = async (req, res) => {
  try {
    const { folderName } = req.params;
    req.query.folder = folderName;
    return getMediaAssets(req, res);
  } catch (error) {
    console.error('Folder media error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * GET /api/media/folders
 * List available root/sub folders in Cloudinary
 */
export const getMediaFolders = async (req, res) => {
  try {
    const cacheKey = 'cloudinary_folders';
    const cached = cache.get(cacheKey);
    if (cached && (Date.now() - cached.timestamp < CACHE_TTL_MS)) {
      return res.status(200).json({ success: true, folders: cached.data });
    }

    // Standard pre-defined and discovered categories
    const knownFolders = [
      { name: 'banners', path: 'colway_expeditions/banners', description: 'Hero banners, visual showcases, backgrounds' },
      { name: 'treks', path: 'colway_expeditions/treks', description: 'Trek photos, expedition trails, camps' },
      { name: 'auth', path: 'colway_expeditions/auth', description: 'Login and signup artwork' },
      { name: 'payments', path: 'colway_expeditions/payments', description: 'Payment QR codes, merchant visuals' },
      { name: 'profiles', path: 'colway_expeditions/profiles', description: 'Guide profiles, climber avatars' },
      { name: 'thumbnails', path: 'colway_expeditions/thumbnails', description: 'Card previews and thumbnails' },
      { name: 'resources', path: 'colway_expeditions/resources', description: 'Maps, trail guides, gear charts' }
    ];

    cache.set(cacheKey, { timestamp: Date.now(), data: knownFolders });
    return res.status(200).json({ success: true, folders: knownFolders });
  } catch (error) {
    console.error('Folder list error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * GET /api/media/gallery
 * Grouped catalog of all application assets organized by folder
 */
export const getMediaCatalog = async (req, res) => {
  try {
    const cacheKey = 'cloudinary_full_catalog';
    const cached = cache.get(cacheKey);
    if (cached && (Date.now() - cached.timestamp < CACHE_TTL_MS)) {
      return res.status(200).json({ success: true, source: 'cache', catalog: cached.data });
    }

    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'colway_expeditions',
      max_results: 100
    });

    const catalog = {
      banners: [],
      treks: [],
      auth: [],
      payments: [],
      profiles: [],
      other: []
    };

    (result.resources || []).forEach(resItem => {
      const asset = formatAsset(resItem);
      const publicId = asset.publicId.toLowerCase();
      if (publicId.includes('/banners/')) {
        catalog.banners.push(asset);
      } else if (publicId.includes('/treks/')) {
        catalog.treks.push(asset);
      } else if (publicId.includes('/auth/')) {
        catalog.auth.push(asset);
      } else if (publicId.includes('/payments/')) {
        catalog.payments.push(asset);
      } else if (publicId.includes('/profiles/')) {
        catalog.profiles.push(asset);
      } else {
        catalog.other.push(asset);
      }
    });

    cache.set(cacheKey, { timestamp: Date.now(), data: catalog });
    return res.status(200).json({ success: true, source: 'cloudinary', catalog });
  } catch (error) {
    console.error('Catalog error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * GET /api/media/expeditions
 * Fetch all expedition images grouped by expedition subfolder
 * E.g. "Colway treks/Expeditions/friendship-peak" -> byExpedition["friendship-peak"]
 */
export const getExpeditionsMedia = async (req, res) => {
  try {
    const cacheKey = 'cloudinary_expeditions_grouped';
    const cached = cache.get(cacheKey);
    if (cached && (Date.now() - cached.timestamp < CACHE_TTL_MS)) {
      return res.status(200).json({ success: true, source: 'cache', ...cached.data });
    }

    let rawResources = [];

    // 1. Search for all assets under Colway treks/Expeditions and its subfolders
    try {
      const searchResult = await cloudinary.search
        .expression('asset_folder:"Colway treks/Expeditions*" OR folder:"Colway treks/Expeditions*"')
        .max_results(100)
        .execute();
      if (searchResult?.resources?.length) {
        rawResources = searchResult.resources;
      }
    } catch (searchErr) {
      // Fallback
    }

    // 2. Fallback to direct asset folder lookup if search was empty
    if (!rawResources.length) {
      try {
        const directResult = await cloudinary.api.resources_by_asset_folder('Colway treks/Expeditions', { max_results: 100 });
        if (directResult?.resources?.length) {
          rawResources = directResult.resources;
        }
      } catch (directErr) {
        // Ignored
      }
    }

    const general = [];
    const byExpedition = {};

    const aliasMap = {
      'friendship peak': 'friendship-peak',
      'hanuman tibba': 'hanuman-tibba',
      'kang yatse ii': 'kang-yatse-2',
      'kang yatse 2': 'kang-yatse-2',
      'mt. deo tibba': 'deo-tibba',
      'deo tibba': 'deo-tibba',
      'mt. nun': 'mt-nun',
      'nun': 'mt-nun',
      'mt. yunam': 'yunam-peak',
      'yunam peak': 'yunam-peak',
      'yunam': 'yunam-peak'
    };

    rawResources.forEach(resItem => {
      const asset = formatAsset(resItem);
      const folderPath = (asset.folder || '').toLowerCase();
      const prefix = 'colway treks/expeditions/';

      if (folderPath.startsWith(prefix)) {
        const rawSub = folderPath.substring(prefix.length).trim();
        const slug = aliasMap[rawSub] || rawSub.replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        if (!byExpedition[slug]) {
          byExpedition[slug] = [];
        }
        byExpedition[slug].push(asset);
      } else if (folderPath === 'colway treks/expeditions' || folderPath === 'expeditions') {
        general.push(asset);
      }
    });

    const payload = { general, byExpedition, total: rawResources.length };
    cache.set(cacheKey, { timestamp: Date.now(), data: payload });

    return res.status(200).json({
      success: true,
      source: 'cloudinary',
      ...payload
    });
  } catch (error) {
    console.error('Expeditions media error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * GET /api/media/treks
 * Fetch all trek images grouped by trek subfolder and root folder
 * E.g. "Colway treks/Treks/kedarkantha" -> byTrek["kedarkantha-winter-trek"]
 */
export const getTreksMedia = async (req, res) => {
  try {
    const cacheKey = 'cloudinary_treks_grouped';
    const cached = cache.get(cacheKey);
    if (cached && (Date.now() - cached.timestamp < CACHE_TTL_MS)) {
      return res.status(200).json({ success: true, source: 'cache', ...cached.data });
    }

    let rawResources = [];

    // Search for Treks asset folders
    try {
      const searchResult = await cloudinary.search
        .expression('asset_folder:"Colway treks/Treks*" OR asset_folder:"Colway treks/Trekking*" OR folder:"colway_expeditions/treks*"')
        .max_results(100)
        .execute();
      if (searchResult?.resources?.length) {
        rawResources = searchResult.resources;
      }
    } catch (searchErr) {
      // Fallback
    }

    if (!rawResources.length) {
      try {
        const directResult = await cloudinary.api.resources({ type: 'upload', prefix: 'colway_expeditions/treks', max_results: 100 });
        if (directResult?.resources?.length) rawResources = directResult.resources;
      } catch (e) {}
    }

    const general = [];
    const byTrek = {};

    const trekAliases = {
      'kedarkantha': 'kedarkantha-winter-trek',
      'kedarkantha-winter-trek': 'kedarkantha-winter-trek',
      'kedarkantha winter trek': 'kedarkantha-winter-trek',
      'brahmatal': 'brahmatal-snow-trek',
      'brahmatal-snow-trek': 'brahmatal-snow-trek',
      'brahmatal snow trek': 'brahmatal-snow-trek',
      'dayara bugyal': 'dayara-bugyal-winter-trek',
      'dayara-bugyal': 'dayara-bugyal-winter-trek',
      'dayara-bugyal-winter-trek': 'dayara-bugyal-winter-trek',
      'dayara bugyal winter trek': 'dayara-bugyal-winter-trek',
      'kuari pass': 'kuari-pass-winter-trek',
      'kuari-pass': 'kuari-pass-winter-trek',
      'kuari-pass-winter-trek': 'kuari-pass-winter-trek',
      'kuari pass winter trek': 'kuari-pass-winter-trek',
      'chopta tungnath': 'chopta-tungnath-chandrashila-trek',
      'chopta-tungnath': 'chopta-tungnath-chandrashila-trek',
      'chopta-tungnath-chandrashila-trek': 'chopta-tungnath-chandrashila-trek',
      'chopta tungnath chandrashila': 'chopta-tungnath-chandrashila-trek',
      'chandrashila': 'chopta-tungnath-chandrashila-trek',
      'gulabi kantha': 'gulabi-kantha-winter-trek',
      'gulabi-kantha': 'gulabi-kantha-winter-trek',
      'gulabi-kantha-winter-trek': 'gulabi-kantha-winter-trek',
      'gulabi kantha winter trek': 'gulabi-kantha-winter-trek',
      'sar pass': 'sar-pass-trek',
      'sar-pass': 'sar-pass-trek',
      'sar-pass-trek': 'sar-pass-trek',
      'sar pass trek': 'sar-pass-trek',
      'buran ghati': 'buran-ghati-trek',
      'buran-ghati': 'buran-ghati-trek',
      'buran-ghati-trek': 'buran-ghati-trek',
      'buran ghati trek': 'buran-ghati-trek',
      'rupin pass': 'rupin-pass-trek',
      'rupin-pass': 'rupin-pass-trek',
      'rupin-pass-trek': 'rupin-pass-trek',
      'rupin pass trek': 'rupin-pass-trek',
      'bali pass': 'bali-pass-trek',
      'bali-pass': 'bali-pass-trek',
      'bali-pass-trek': 'bali-pass-trek',
      'bali pass trek': 'bali-pass-trek',
      'hampta pass': 'hampta-pass-trek',
      'hampta-pass': 'hampta-pass-trek',
      'hampta-pass-trek': 'hampta-pass-trek',
      'hampta pass trek': 'hampta-pass-trek',
      'kashmir great lakes': 'kashmir-great-lakes-trek',
      'kashmir-great-lakes': 'kashmir-great-lakes-trek',
      'kashmir-great-lakes-trek': 'kashmir-great-lakes-trek',
      'kashmir great lakes trek': 'kashmir-great-lakes-trek',
      'kgl': 'kashmir-great-lakes-trek',
      'pin bhaba pass': 'pin-bhaba-pass-trek',
      'pin-bhaba-pass': 'pin-bhaba-pass-trek',
      'pin-bhaba-pass-trek': 'pin-bhaba-pass-trek',
      'pin bhaba': 'pin-bhaba-pass-trek',
      'everest base camp': 'everest-base-camp-trek',
      'everest-base-camp': 'everest-base-camp-trek',
      'everest-base-camp-trek': 'everest-base-camp-trek',
      'ebc': 'everest-base-camp-trek'
    };

    rawResources.forEach(resItem => {
      const asset = formatAsset(resItem);
      const folderPath = (asset.folder || '').toLowerCase();
      const trekPrefix = folderPath.includes('/treks/') ? folderPath.split('/treks/')[1] : (folderPath.includes('/trekking/') ? folderPath.split('/trekking/')[1] : null);

      if (trekPrefix) {
        const rawSub = trekPrefix.trim();
        const slug = trekAliases[rawSub] || rawSub.replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        if (!byTrek[slug]) byTrek[slug] = [];
        byTrek[slug].push(asset);
      } else {
        general.push(asset);
      }
    });

    const payload = { general, byTrek, total: rawResources.length };
    cache.set(cacheKey, { timestamp: Date.now(), data: payload });

    return res.status(200).json({ success: true, source: 'cloudinary', ...payload });
  } catch (error) {
    console.error('Treks media error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * GET /api/media/banners
 * Fetch all banner assets from Colway treks/Banners or colway_expeditions/banners
 */
export const getBannersMedia = async (req, res) => {
  try {
    const cacheKey = 'cloudinary_banners_list';
    const cached = cache.get(cacheKey);
    if (cached && (Date.now() - cached.timestamp < CACHE_TTL_MS)) {
      return res.status(200).json({ success: true, source: 'cache', resources: cached.data });
    }

    let rawResources = [];
    try {
      const searchRes = await cloudinary.search
        .expression('asset_folder:"Colway treks/Banners*" OR folder:"colway_expeditions/banners*"')
        .max_results(50)
        .execute();
      if (searchRes?.resources?.length) rawResources = searchRes.resources;
    } catch (e) {}

    if (!rawResources.length) {
      try {
        const prefixRes = await cloudinary.api.resources({ type: 'upload', prefix: 'colway_expeditions/banners', max_results: 50 });
        if (prefixRes?.resources?.length) rawResources = prefixRes.resources;
      } catch (e) {}
    }

    const resources = rawResources.map(formatAsset);
    cache.set(cacheKey, { timestamp: Date.now(), data: resources });
    return res.status(200).json({ success: true, source: 'cloudinary', total: resources.length, resources });
  } catch (error) {
    console.error('Banners media error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
