import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import axios from "axios";
import { IDuck } from "@ducks/shared";

const API_URL = "http://localhost:3000";
export const typeDefs = `#graphql
  type Point {
    type: String!
    coordinates: [Float!]!
  }

  type Duck {
    _id: ID!
    color: String!
    age: Int!
    location: Point!
  }

  type Query {
    ducks: [Duck!]!
    duck(_id: ID!): Duck
  }

  input PointInput {
    type: String!
    coordinates: [Float!]!
  }

  input CreateDuckInput {
    color: String!
    age: Int!
    location: PointInput!
  }

  type Mutation {
    createDuck(input: CreateDuckInput!): Duck!
    updateDuck(id: ID!, input: CreateDuckInput!): Duck!
    deleteDuck(id: ID!): Boolean!
  }
`;

export const resolvers = {
  Query: {
    ducks: async () => {
      const response = await axios.get(`${API_URL}/ducks`);
      return response.data;
    },
    duck: async (_: any, { id }: { id: string }) => {
      console.log(id);
      if (!id) {
        throw new Error("Duck ID is required");
      }
      const response = await axios.get(`${API_URL}/ducks/${id}`);
      return response.data;
    },
  },
  Mutation: {
    createDuck: async (_: any, { input }: { input: Omit<IDuck, "_id"> }) => {
      console.log("🚀 ~ createDuck: ~ input:", input);

      const response = await axios.post(`${API_URL}/ducks`, input);
      return response.data;
    },
    updateDuck: async (
      _: any,
      { id, input }: { id: string; input: Omit<IDuck, "_id"> }
    ) => {
      const response = await axios.put(`${API_URL}/ducks/${id}`, input);
      return response.data;
    },
    deleteDuck: async (_: any, { id }: { id: string }) => {
      await axios.delete(`${API_URL}/ducks/${id}`);
      return true;
    },
  },
};

// `startStandaloneServer` returns a `Promise` with the
// the URL that the server is listening on.
const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } }); //highlight-line
console.log("🚀 ~running on port:", url);
