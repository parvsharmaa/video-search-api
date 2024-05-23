import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Video from '../models/video.model.js';
import connectDB from '../config/db.js';

connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, './UpdatedDataSet.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

console.log(data.results.length);

const seedDB = async () => {
  try {
    // initally first remove all test data
    await Video.deleteMany({});
    // push fresh data, as file is triggered
    await Video.insertMany(data.results);

    console.log('Data inserted');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
