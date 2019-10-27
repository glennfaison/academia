import { Gender } from '../models/Gender';
import { Instructor } from '../models/Instructor';
import * as faker from 'faker';
import { config } from '../config';
import * as bcrypt from 'bcrypt';

export async function generate(count: number = 1): Promise<void> {
  let gender_ids: any[] = await Gender.findAll();
  gender_ids = gender_ids.map(i => i.id);

  function createOne() {
    const gender_id = gender_ids[Math.floor(Math.random() * gender_ids.length)];
    const first_name = faker.name.firstName(gender_id);
    const other_names = faker.name.lastName(gender_id);
    return {
      gender_id: gender_id,
      first_name: first_name,
      other_names: other_names,
      email: faker.internet.email(first_name, other_names),
      username: faker.internet.userName(first_name, other_names),
      image_path: faker.image.imageUrl(),
      password: bcrypt.hashSync('password', config.bcrypt.salt),
      date_of_birth: faker.date.between(new Date(1970, 1, 1), new Date(1999, 12, 31)).toISOString(),
      place_of_birth: faker.address.country(),
    };
  }

  const arr: any[] = Array.from({length: count}, createOne);
  Instructor.bulkCreate(arr);
}
