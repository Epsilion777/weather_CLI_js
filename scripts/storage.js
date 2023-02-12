import { homedir } from 'os';
import { join } from 'path';
import fs from 'fs';

const filePath = join(homedir(), 'weather-settings.json');

const saveKeyValue = async (key, value) => {
  let data = {};
  if (fs.existsSync(filePath)) {
    const file = await fs.promises.readFile(filePath);
    data = JSON.parse(file);
    data[key] = value;
    await fs.promises.writeFile(filePath, JSON.stringify(data));
  } else {
    console.log(data);
    data[key] = value;
    await fs.promises.writeFile(filePath, JSON.stringify(data));
  }
};

const getKeyValue = async (key) => {
  if (fs.existsSync(filePath)) {
    const file = await fs.promises.readFile(filePath);
    let data = JSON.parse(file);
    return data[key];
  }
  return undefined;
};

export { saveKeyValue, getKeyValue };
