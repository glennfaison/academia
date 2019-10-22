import { CrudController } from './crud.controller';
import { CourseExamination } from '../models/CourseExamination';

export class CourseExaminationController extends CrudController {

  constructor() {
    super(CourseExamination);
  }

}
