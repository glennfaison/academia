import { Router } from 'express';
import { GenderController } from '../controllers/gender.controller';

const controller = new GenderController();
export const genders = Router();

/* Create one. */
genders.route('/')
  .post((req, res) => controller.createOne(req, res));

/* Fetch many. */
genders.route('/')
  .get((req, res) => controller.fetchMany(req, res));

/* Fetch by id */
genders.route('/:id')
  .get((req, res) => controller.fetchById(req, res));

/* Update by id */
genders.route('/:id')
  .put((req, res) => controller.updateById(req, res));

/* Update many */
genders.route('/')
  .put((req, res) => controller.updateMany(req, res));

/* Delete by id */
genders.route('/:id')
  .delete((req, res) => controller.deleteById(req, res));
