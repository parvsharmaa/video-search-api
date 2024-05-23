import express from 'express';
import connectDB from './config/db.js';
import videoRoutes from './routes/video.route.js';

const app = express();
connectDB();

app.use(express.json());
app.use('/api/videos', videoRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
