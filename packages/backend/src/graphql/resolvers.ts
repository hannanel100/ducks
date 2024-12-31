import axios from 'axios';
import { IDuck } from '../models/Duck';

const API_URL = 'http://localhost:3000';

export const resolvers = {
  Query: {
    ducks: async () => {
      const response = await axios.get(`${API_URL}/ducks`);
      return response.data;
    },
    duck: async (_: any, { id }: { id: string }) => {
      console.log(id);
      if (!id) {
        throw new Error('Duck ID is required');
      }
      const response = await axios.get(`${API_URL}/ducks/${id}`);
      return response.data;
    },
  },
  Mutation: {
    createDuck: async (_: any, { input }: { input: Omit<IDuck, '_id'> }) => {
      const response = await axios.post(`${API_URL}/ducks`, input);
      return response.data;
    },
    updateDuck: async (_: any, { id, input }: { id: string; input: Omit<IDuck, '_id'> }) => {
      const response = await axios.put(`${API_URL}/ducks/${id}`, input);
      return response.data;
    },
    deleteDuck: async (_: any, { id }: { id: string }) => {
      await axios.delete(`${API_URL}/ducks/${id}`);
      return true;
    },
  },
};
