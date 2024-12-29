import express from 'express';
import { createDuck, getAllDucks, getDuckById, updateDuck, deleteDuck } from '../controllers/duckController';

const router = express.Router();

// Create a duck
router.post('/', createDuck);

// Get all ducks
router.get('/', getAllDucks);

// Get a single duck by ID
router.get('/:id', getDuckById);

// Update a duck
router.put('/:id', updateDuck);

// Delete a duck
router.delete('/:id', deleteDuck);

export default router;