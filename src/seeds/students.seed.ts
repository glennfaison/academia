import { Gender } from '../models/Gender';
import { Student } from '../models/Student';
import * as faker from 'faker';
import { config } from '../config';
import * as bcrypt from 'bcrypt';
import { Classroom } from '../models/Classroom';

export async function generate(count: number = 1): Promise<void> {
  let gender_ids: any[] = await Gender.findAll();
  let classroom_ids: any[] = await Classroom.findAll();
  gender_ids = gender_ids.map(i => i.id);
  classroom_ids = classroom_ids.map(i => i.id);

  function createOne() {
    const gender_id = gender_ids[Math.floor(Math.random() * gender_ids.length)];
    const first_name = faker.name.firstName(gender_id);
    const other_names = faker.name.lastName(gender_id);
    return {
      classroom_id: classroom_ids[Math.floor(Math.random() * classroom_ids.length)],
      gender_id: gender_id,
      first_name: first_name,
      other_names: other_names,
      email: faker.internet.email(first_name, other_names),
      username: faker.internet.userName(first_name, other_names),
      image_path: faker.image.imageUrl(),
      password: bcrypt.hashSync('password', config.bcrypt.salt),
      date_of_birth: faker.date.between(new Date(2001, 1, 1), new Date(2010, 12, 31)).toISOString(),
      place_of_birth: faker.address.country(),
    };
  }

  const arr: any[] = Array.from({length: count}, createOne);
  const promises = arr.map(i => Student.build(i).save());
  await Promise.all(promises);
}
