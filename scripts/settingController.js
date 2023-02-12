import consoleMessages from './consoleMessages.js';
import { saveKeyValue } from './storage.js';

const saveToken = async (token) => {
  try {
    if (!token.length) {
      consoleMessages.errorToken();
      return;
    }
    await saveKeyValue('token', token);
    consoleMessages.successMessage('Токен сохранен');
  } catch (err) {
    consoleMessages.errorMessage(err);
  }
};

const saveCity = async (city) => {
  try {
    if (!city.length) {
      consoleMessages.errorCity();
      return;
    }
    await saveKeyValue('city', city);
    consoleMessages.successMessage('Город сохранен');
  } catch (err) {
    consoleMessages.errorMessage(err);
  }
};

export { saveToken, saveCity };
