import { CrudController } from './crud.controller';
import { Instructor } from '../models/Instructor';

export class InstructorController extends CrudController {

  constructor() {
    super(Instructor);
  }

}
