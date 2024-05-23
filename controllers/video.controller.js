import videoService from '../services/video.service.js';

const searchVideos = async (req, res) => {
  try {
    const { title, tags, description, page, limit } = req.query;

    // form search parameters
    const searchParams = {
      title,
      tags,
      description,
      page: parseInt(page) || 1,
      limit: parseInt(limit) || 10,
    };

    // search for videos
    const result = await videoService.searchVideos(searchParams);

    // return the result with success response
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { searchVideos };
