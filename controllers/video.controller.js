import videoService from '../services/video.service.js';

const searchVideos = async (req, res, next) => {
  try {
    const { title, tags, description, page, limit } = req.query;

    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    // Validate and parse pagination parameters
    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 10;
    if (limitNum > 100) {
      return res.status(400).json({ message: 'Limit cannot exceed 100' });
    }

    // Form search parameters
    const searchParams = {
      title,
      tags,
      description,
      page: pageNum,
      limit: limitNum,
    };

    // Search for videos
    const result = await videoService.searchVideos(searchParams);

    // Return the result with success response
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default { searchVideos };
