import express from 'express';
import connectDB from './config/db.js';
import videoRoutes from './routes/video.route.js';
import rateLimit from 'express-rate-limit';

const app = express();
connectDB();

// Apply rate limiter middleware
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
});
app.use(limiter);

app.use(express.json());
app.use('/api/videos', videoRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
