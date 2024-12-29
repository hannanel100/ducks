import { Request, Response, RequestHandler } from 'express';
import { duckService } from '../services/duckService';

interface DuckParams {
  id?: string;
}

export const createDuck: RequestHandler = async (req, res) => {
  try {
    const duck = await duckService.createDuck(req.body);
    res.status(201).json(duck);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getAllDucks: RequestHandler = async (req, res) => {
  try {
    const ducks = await duckService.getAllDucks();
    res.json(ducks);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getDuckById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const duck = await duckService.getDuckById(id);
    if (!duck) {
       res.status(404).json({ error: 'Duck not found' });
    }
    res.json(duck);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateDuck: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const duck = await duckService.updateDuck(id, req.body);
    if (!duck) {
      res.status(404).json({ error: 'Duck not found' });
    }
    res.json(duck);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteDuck: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const success = await duckService.deleteDuck(id);
    if (!success) {
       res.status(404).json({ error: 'Duck not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
