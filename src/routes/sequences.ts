import { Router } from 'express';
import { SequenceController } from '../controllers/sequence.controller';

const controller = new SequenceController();
export const sequences = Router();

/* Create one. */
sequences.route('/')
  .post((req, res) => controller.createOne(req, res));

/* Fetch many. */
sequences.route('/')
  .get((req, res) => controller.fetchMany(req, res));

/* Fetch by id */
sequences.route('/:id')
  .get((req, res) => controller.fetchById(req, res));

/* Update by id */
sequences.route('/:id')
  .put((req, res) => controller.updateById(req, res));

/* Update many */
sequences.route('/')
  .put((req, res) => controller.updateMany(req, res));

/* Delete by id */
sequences.route('/:id')
  .delete((req, res) => controller.deleteById(req, res));
