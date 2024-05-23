import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GENRE_TAGS } from '../services/const.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, './DataSet.json');
const data = JSON.parse(readFileSync(dataPath, 'utf8'));

// Define a function to generate tags based on the video details
function generateTags(video) {
  const tags = [];
  const genreKeys = Object.keys(GENRE_TAGS);

  if (!('genre_ids' in video) || video.genre_ids.length === 0) {
    // If no genre_ids, assign 2-3 random genres
    video.genre_ids = getRandomGenres(
      genreKeys,
      2 + Math.floor(Math.random() * 2)
    );
  }

  video.genre_ids.forEach((genre_id) => {
    if (genre_id in GENRE_TAGS) {
      tags.push(GENRE_TAGS[genre_id]);
    }
  });

  return tags;
}

// Function to get random genres
function getRandomGenres(genreKeys, count) {
  const randomGenres = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * genreKeys.length);
    randomGenres.push(parseInt(genreKeys[randomIndex]));
    genreKeys.splice(randomIndex, 1); // Remove the selected genre to avoid duplicates
  }
  return randomGenres;
}

// Update each video in the dataset with generated tags
data.results.forEach((video) => {
  video.tags = generateTags(video);
});

// Save the updated data back to JSON
const updatedDataPath = './UpdatedDataSet.json';
writeFileSync(updatedDataPath, JSON.stringify(data, null, 4), 'utf8');

console.log(updatedDataPath);
