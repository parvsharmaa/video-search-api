import videoService from '../services/video.service.js';

const searchVideos = async (req, res) => {
  try {
    const { title, tags, description, page, limit } = req.query;
    const searchParams = {
      title,
      tags,
      description,
      page: parseInt(page) || 1,
      limit: parseInt(limit) || 10,
    };
    const result = await videoService.searchVideos(searchParams);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { searchVideos };
