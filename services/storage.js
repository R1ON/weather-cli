import { homedir } from 'os';
import { join } from 'path';

const storagePath = join(homedir(), 'weather-data.json');

export const saveKeyValue = (key, value) => {
  console.log();
};