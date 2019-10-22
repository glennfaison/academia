import { Router } from 'express';
import { InstructorController } from '../controllers/instructor.controller';

const controller = new InstructorController();
export const instructors = Router();

/* Create one. */
instructors.route('/')
  .post((req, res) => controller.createOne(req, res));

/* Fetch many. */
instructors.route('/')
  .get((req, res) => controller.fetchMany(req, res));

/* Fetch by id */
instructors.route('/:id')
  .get((req, res) => controller.fetchById(req, res));

/* Update by id */
instructors.route('/:id')
  .put((req, res) => controller.updateById(req, res));

/* Update many */
instructors.route('/')
  .put((req, res) => controller.updateMany(req, res));

/* Delete by id */
instructors.route('/:id')
  .delete((req, res) => controller.deleteById(req, res));
