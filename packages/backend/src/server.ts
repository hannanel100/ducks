import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the TypeScript backend!');
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});