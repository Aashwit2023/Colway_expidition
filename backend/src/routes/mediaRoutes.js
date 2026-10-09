import express from 'express';
import {
  getMediaAssets,
  getMediaByFolder,
  getMediaFolders,
  getMediaCatalog,
  getExpeditionsMedia,
  getTreksMedia,
  getBannersMedia
} from '../controllers/mediaController.js';

const router = express.Router();

// 1. Grouped media assets by expedition subfolder
// GET /api/media/expeditions
router.get('/expeditions', getExpeditionsMedia);

// 2. Grouped trek media assets by trek subfolder
// GET /api/media/treks
router.get('/treks', getTreksMedia);

// 3. Dynamic banners
// GET /api/media/banners
router.get('/banners', getBannersMedia);

// 2. Discover/list assets by folder or prefix
// GET /api/media?folder=colway_expeditions/treks
router.get('/', getMediaAssets);

// 3. Discover available folder categories
// GET /api/media/folders
router.get('/folders', getMediaFolders);

// 4. Complete organized catalog grouped by category
// GET /api/media/catalog
router.get('/catalog', getMediaCatalog);

// 5. Convenience route for folder name
// GET /api/media/folder/:folderName
router.get('/folder/:folderName', getMediaByFolder);

export default router;
