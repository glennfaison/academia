import { CrudController } from './crud.controller';
import { StudentExamination } from '../models/StudentExamination';

export class StudentExaminationController extends CrudController {

  constructor() {
    super(StudentExamination);
  }

}
