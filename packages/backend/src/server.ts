import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import ducksRouter from './routes/ducks';

const app = express();
const port = 3000;
const MONGODB_URI = 'mongodb://root:example@localhost:27017/ducks?authSource=admin';

async function startServer() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  // Middleware
  app.use(express.json());
  
  // Apollo GraphQL middleware
  app.use('/graphql', expressMiddleware(apolloServer));

  // REST Routes
  app.use('/ducks', ducksRouter);

  // MongoDB connection
  await mongoose.connect(MONGODB_URI);
  console.log('Connected to MongoDB');

  app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
    console.log(`GraphQL endpoint available at http://localhost:${port}/graphql`);
  });
}

startServer().catch((error) => {
  console.error('Error starting server:', error);
});