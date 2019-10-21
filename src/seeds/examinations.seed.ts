import * as faker from 'faker';
import { Examination } from '../models/Examination';

export async function generate(count: number = 1): Promise<void> {
  const arr: any[] = Array.from({length: count}, createOne);
  Examination.bulkCreate(arr);
}

function createOne() {
  return {
    title: faker.random.words(2),
    description: faker.random.words(10),
  };
}
