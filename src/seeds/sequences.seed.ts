import * as faker from 'faker';
import { Sequence } from '../models/Sequence';

export async function generate(count: number = 1): Promise<void> {
  const arr: any[] = Array.from({length: count}, createOne);
  const promises = arr.map(i => Sequence.build(i).save());
  await Promise.all(promises);
}

function createOne() {
  return {
    title: faker.random.words(2),
    description: faker.random.words(10),
  };
}
