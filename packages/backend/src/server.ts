import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

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

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the TypeScript backend!');
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});