import { Gender } from '../models/Gender';

export async function generate(count?: number): Promise<void> {
  const data = [
    { symbol: 'F', name: 'Female', description: 'A woman or girl' },
    { symbol: 'M', name: 'Male', description: 'A man or boy' },
  ];
  await Gender.bulkCreate(data);
}
