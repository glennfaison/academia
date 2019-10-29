import { CrudController } from './crud.controller';
import { Sequence } from '../models/Sequence';

export class SequenceController extends CrudController {

  constructor() {
    super(Sequence);
  }

}
