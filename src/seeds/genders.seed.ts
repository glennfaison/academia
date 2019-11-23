import { Gender } from '../models/Gender';

export async function generate(count?: number): Promise<void> {
  const arr = [
    { symbol: 'F', name: 'Female', description: 'A woman or girl' },
    { symbol: 'M', name: 'Male', description: 'A man or boy' },
    { symbol: null, name: 'Unspecified', description: 'Prefer not to say' },
  ];
  const promises = arr.map(i => Gender.build(i).save());
  await Promise.all(promises);
}
