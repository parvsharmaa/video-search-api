import mongoose from 'mongoose';

const { Schema } = mongoose;

// define video schema
const videoSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
    adult: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    video: {
      type: Boolean,
      required: true,
    },
    backdrop_path: {
      type: String,
    },
    genre_ids: {
      type: [Number],
      required: true,
    },
    original_language: {
      type: String,
    },
    original_title: {
      type: String,
    },
    overview: {
      type: String,
    },
    popularity: {
      type: Number,
    },
    poster_path: {
      type: String,
    },
    release_date: {
      type: Date,
    },
    vote_average: {
      type: Number,
    },
    vote_count: {
      type: Number,
    },
    tags: {
      type: [String],
    },
  },
  { timestamps: true }
);

const Video = mongoose.model('Video', videoSchema);

export default Video;
