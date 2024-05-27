import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import connectDB from './config/db.js';
import videoRoutes from './routes/video.route.js';
import { errorHandler } from './middlewares/error.middleware.js';

const app = express();
connectDB();

// Security middleware
app.use(helmet());

// Enable CORS
app.use(cors());

// Rate limiter middleware
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100,
});
app.use(limiter);

// Body parser middleware
app.use(express.json());

// Routes
app.use('/api/videos', videoRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
