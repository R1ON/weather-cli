import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

export const TOKEN_DICTIONARY = {
  token: 'TOKEN',
  city: 'city',
};

const storagePath = join(homedir(), 'weather-data.json');

export const saveKeyValue = async (key, value) => {
  let data = {};

  if (await isExist(storagePath)) {
    const file = await promises.readFile(storagePath);
    data = JSON.parse(file.toString());
  }

  data[key] = value;

  await promises.writeFile(storagePath, JSON.stringify(data));
};

export const getKeyValue = async (key) => {
  if (await isExist(storagePath)) {
    const file = await promises.readFile(storagePath);
    const data = JSON.parse(file.toString());

    return data[key];
  }

  return null;
};

const isExist = async (filePath) => {
  try {
    await promises.stat(filePath);
    return true;
  }
  catch (err) {
    return false;
  }
};
