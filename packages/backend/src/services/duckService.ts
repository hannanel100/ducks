import { Duck } from '../models/Duck';

export class DuckService {
  async createDuck(duckData: any) {
    const duck = new Duck(duckData);
    return await duck.save();
  }

  async getAllDucks() {
    return await Duck.find();
  }

  async getDuckById(id: string) {
    return await Duck.findById(id);
  }

  async updateDuck(id: string, duckData: any) {
    return await Duck.findByIdAndUpdate(id, duckData, { new: true });
  }

  async deleteDuck(id: string) {
    return await Duck.findByIdAndDelete(id);
  }
}

export const duckService = new DuckService();
