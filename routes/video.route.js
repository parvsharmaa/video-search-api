import express from 'express';
import videoController from '../controllers/video.controller.js';

const router = express.Router();

router.get('/search', videoController.searchVideos);

export default router;
