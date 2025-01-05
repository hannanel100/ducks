import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import ducksRouter from "./routes/ducks";
import logger from "./utils/logger";
import { requestLogger } from "./middleware/requestLogger";

const app = express();
const port = 3000;
const MONGODB_URI =
  "mongodb://root:example@localhost:27017/ducks?authSource=admin";

const corsOptions = {
  origin: "http://localhost:5173",
};
async function startServer() {
  app.use(cors());

  // Middleware
  app.use(express.json());
  app.use(requestLogger); // Add request logging middleware

  // REST Routes
  app.use("/ducks", ducksRouter);

  // MongoDB connection
  await mongoose.connect(MONGODB_URI);
  logger.info("Connected to MongoDB");

  app.listen(port, () => {
    logger.info(`Backend server listening at http://localhost:${port}`);
  });
}

startServer().catch((error) => {
  logger.error("Error starting server:", error);
});
