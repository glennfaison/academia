import { Gender } from '../models/Gender';

export async function generate(count?: number): Promise<void> {
  const data = [
    { symbol: 'M', name: 'Male', description: 'A man or boy' },
    { symbol: 'F', name: 'Female', description: 'A woman or girl' },
  ];
  await Gender.bulkCreate(data);
}
