import Video from '../models/video.model.js';

const searchVideos = async ({
  title,
  tags,
  description,
  page = 1,
  limit = 10,
}) => {
  const query = {};

  // Apply query filters
  if (title) query.title = { $regex: title, $options: 'i' };
  if (tags) query.tags = { $in: tags.split(',') };
  if (description) query.overview = { $regex: description, $options: 'i' };

  // Paginate the results
  const videos = await Video.find(query)
    .skip((page - 1) * limit)
    .limit(limit);

  // Count the total number of results
  const total = await Video.countDocuments(query);

  return { videos, total, page, pages: Math.ceil(total / limit) };
};

export default { searchVideos };
