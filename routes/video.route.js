import express from 'express';
import videoController from '../controllers/video.controller.js';
import { validateVideoSearch } from '../middlewares/video.validator.js';

const router = express.Router();

router.get('/search', validateVideoSearch, videoController.searchVideos);

export default router;
