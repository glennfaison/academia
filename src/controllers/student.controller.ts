import { CrudController } from './crud.controller';
import { Student } from '../models/Student';

export class StudentController extends CrudController {

  constructor() {
    super(Student);
  }

}
