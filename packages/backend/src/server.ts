import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import ducksRouter from './routes/ducks';

const app = express();
const port = 3000;
const MONGODB_URI = 'mongodb://root:example@localhost:27017/ducks?authSource=admin';

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Routes
app.use('/ducks', ducksRouter);


app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});