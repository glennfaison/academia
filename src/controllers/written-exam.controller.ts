import { CrudController } from './crud.controller';
import { WrittenExam } from '../models/WrittenExam';

export class WrittenExamController extends CrudController {

  constructor() {
    super(WrittenExam);
  }

}
