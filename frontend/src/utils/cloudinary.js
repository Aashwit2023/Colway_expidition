/**
 * Cloudinary Centralized Media Utility
 * Production-ready URL generation, responsive srcset calculation, and asset registry
 */

export const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'n2tlqhzj';
export const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/**
 * Standard Application Media Registry
 * Predefined public IDs mapped to clean categories
 */
export const CLOUDINARY_ASSETS = {
  banners: {
    adventure: 'colway_expeditions/banners/adventure',
    cllbck: 'colway_expeditions/banners/cllbck',
    contact: 'colway_expeditions/banners/contact',
    cultural: 'colway_expeditions/banners/cultural',
    culture: 'colway_expeditions/banners/culture',
    punchkula: 'colway_expeditions/banners/punchkula'
  },
  treks: {
    bali_pass: 'colway_expeditions/treks/bali_pass',
    buran_ghati: 'colway_expeditions/treks/buran_ghati',
    everest_base_camp: 'colway_expeditions/treks/everest_base_camp',
    friendship: 'colway_expeditions/treks/friendship',
    friendship_peak: 'colway_expeditions/treks/friendship_peak',
    kailash: 'colway_expeditions/treks/kailash',
    trekking: 'colway_expeditions/treks/trekking',
    trekking1: 'colway_expeditions/treks/trekking1',
    trekking2: 'colway_expeditions/treks/trekking2',
    trekking3: 'colway_expeditions/treks/trekking3',
    trekking33: 'colway_expeditions/treks/trekking33',
    kuari_pass: 'IMG_8353',
    himalayan_expeditions: 'IMG_8487'
  },
  auth: {
    loginimg: 'colway_expeditions/auth/loginimg',
    signimg: 'colway_expeditions/auth/signimg'
  },
  payments: {
    my_qr_code: 'colway_expeditions/payments/my_qr_code'
  }
};

/**
 * Flattened lookup dictionary for backward-compatible asset resolution
 */
const ASSET_LOOKUP = {
  // Banners
  'adventure': CLOUDINARY_ASSETS.banners.adventure,
  'adventure.jpg': CLOUDINARY_ASSETS.banners.adventure,
  'cllbck': CLOUDINARY_ASSETS.banners.cllbck,
  'cllbck.jpg': CLOUDINARY_ASSETS.banners.cllbck,
  'contact': CLOUDINARY_ASSETS.banners.contact,
  'contact.jpg': CLOUDINARY_ASSETS.banners.contact,
  'cultural': CLOUDINARY_ASSETS.banners.cultural,
  'cultural.jpg': CLOUDINARY_ASSETS.banners.cultural,
  'culture': CLOUDINARY_ASSETS.banners.culture,
  'culture.jpg': CLOUDINARY_ASSETS.banners.culture,
  'punchkula': CLOUDINARY_ASSETS.banners.punchkula,
  'punchkula.jpg': CLOUDINARY_ASSETS.banners.punchkula,

  // Treks
  'bali_pass': CLOUDINARY_ASSETS.treks.bali_pass,
  'bali_pass.jpg': CLOUDINARY_ASSETS.treks.bali_pass,
  'buran_ghati': CLOUDINARY_ASSETS.treks.buran_ghati,
  'buran_ghati.jpg': CLOUDINARY_ASSETS.treks.buran_ghati,
  'everest_base_camp': CLOUDINARY_ASSETS.treks.everest_base_camp,
  'everest_base_camp.jpg': CLOUDINARY_ASSETS.treks.everest_base_camp,
  'friendship': CLOUDINARY_ASSETS.treks.friendship,
  'friendship.jpg': CLOUDINARY_ASSETS.treks.friendship,
  'friendship_peak': CLOUDINARY_ASSETS.treks.friendship_peak,
  'friendship_peak.jpg': CLOUDINARY_ASSETS.treks.friendship_peak,
  'kailash': CLOUDINARY_ASSETS.treks.kailash,
  'kailash.jpg': CLOUDINARY_ASSETS.treks.kailash,
  'trekking': CLOUDINARY_ASSETS.treks.trekking,
  'trekking.jpg': CLOUDINARY_ASSETS.treks.trekking,
  'trekking1': CLOUDINARY_ASSETS.treks.trekking1,
  'trekking1.jpg': CLOUDINARY_ASSETS.treks.trekking1,
  'trekking2': CLOUDINARY_ASSETS.treks.trekking2,
  'trekking2.jpg': CLOUDINARY_ASSETS.treks.trekking2,
  'trekking3': CLOUDINARY_ASSETS.treks.trekking3,
  'trekking3.jpg': CLOUDINARY_ASSETS.treks.trekking3,
  'trekking33': CLOUDINARY_ASSETS.treks.trekking33,
  'trekking33.jpg': CLOUDINARY_ASSETS.treks.trekking33,

  // Auth & Payments
  'loginimg': CLOUDINARY_ASSETS.auth.loginimg,
  'loginimg.jpg': CLOUDINARY_ASSETS.auth.loginimg,
  'signimg': CLOUDINARY_ASSETS.auth.signimg,
  'signimg.jpg': CLOUDINARY_ASSETS.auth.signimg,
  'my_qr_code': CLOUDINARY_ASSETS.payments.my_qr_code,
  'my_qr_code.png': CLOUDINARY_ASSETS.payments.my_qr_code,
  'my_qr_code.jpg': CLOUDINARY_ASSETS.payments.my_qr_code
};

/**
 * Extract publicId from arbitrary inputs (URL, path, or key)
 */
export const extractPublicId = (source) => {
  if (!source || typeof source !== 'string') return '';

  // 1. Direct asset key match
  const cleanKey = source.split('/').pop().replace(/\?.*$/, '');
  if (ASSET_LOOKUP[source]) return ASSET_LOOKUP[source];
  if (ASSET_LOOKUP[cleanKey]) return ASSET_LOOKUP[cleanKey];

  // 2. Cloudinary URL
  if (source.includes('res.cloudinary.com')) {
    const uploadIdx = source.indexOf('/upload/');
    if (uploadIdx !== -1) {
      const rest = source.substring(uploadIdx + 8);
      // Strip transformations and version (e.g., f_auto,q_auto/v1790714767/colway_expeditions/...)
      const parts = rest.split('/');
      const cleanParts = parts.filter(p => !p.startsWith('v') || !/^\d+$/.test(p.substring(1)))
                              .filter(p => !p.includes(',') && !p.startsWith('w_') && !p.startsWith('c_') && !p.startsWith('f_') && !p.startsWith('q_'));
      const idWithExt = cleanParts.join('/');
      return idWithExt.replace(/\.[a-zA-Z0-9]+$/, '');
    }
  }

  // 3. Fallback: strip leading slash and extension if plain identifier
  return source.replace(/^\/+/, '').replace(/\.[a-zA-Z0-9]+$/, '');
};

/**
 * Build optimized Cloudinary URL
 * @param {string} source - Public ID, asset key, or Cloudinary URL
 * @param {object} options - Transformation options
 */
export const buildCloudinaryUrl = (source, options = {}) => {
  if (!source) return '';

  const publicId = extractPublicId(source);
  if (!publicId) return source;

  const {
    width,
    height,
    crop = (width && height) ? 'fill' : 'limit',
    quality = 'auto',
    format = 'auto',
    gravity,
    aspectRatio,
    dpr = 'auto'
  } = options;

  const transforms = [];

  // Format & Quality optimization
  if (format) transforms.push(`f_${format}`);
  if (quality) transforms.push(`q_${quality}`);
  if (dpr) transforms.push(`dpr_${dpr}`);

  // Sizing & Cropping
  if (crop) transforms.push(`c_${crop}`);
  if (width) transforms.push(`w_${Math.round(width)}`);
  if (height) transforms.push(`h_${Math.round(height)}`);
  if (aspectRatio) transforms.push(`ar_${aspectRatio}`);
  if (gravity) transforms.push(`g_${gravity}`);

  const transformString = transforms.join(',');
  return `${CLOUDINARY_BASE_URL}/${transformString}/${publicId}`;
};

/**
 * Generate a responsive srcSet string for Cloudinary images
 */
export const buildSrcSet = (source, widths = [360, 640, 768, 1024, 1280, 1600, 1920], options = {}) => {
  const publicId = extractPublicId(source);
  if (!publicId) return '';

  return widths
    .map(w => `${buildCloudinaryUrl(publicId, { ...options, width: w })} ${w}w`)
    .join(', ');
};

/**
 * Quick helper for standard display sizes
 */
export const getCloudinaryUrl = (source, width, height, crop) => {
  return buildCloudinaryUrl(source, { width, height, crop });
};
