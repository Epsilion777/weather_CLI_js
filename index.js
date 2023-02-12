import consoleMessages from './scripts/consoleMessages.js';
import getArgv from './scripts/getArgv.js';
import { saveToken, saveCity } from './scripts/settingController.js';
import { getKeyValue } from './scripts/storage.js';
import axios from 'axios';

const startCLI = async () => {
  const objArgs = getArgv(process.argv);
  if (objArgs.h) {
    // Выввод Help
    consoleMessages.showHelp();
  }
  if (objArgs.c) {
    // Сохранение города
    await saveCity(objArgs.c);
  }
  if (objArgs.t) {
    // Сохранение токена
    await saveToken(objArgs.t);
  }
  if (objArgs.h || objArgs.c || objArgs.t) return;
  // Вывод прогноза погоды
  const token = await getKeyValue('token');
  if (!token) {
    consoleMessages.errorToken();
    return;
  }
  const city = await getKeyValue('city');
  if (!city) {
    consoleMessages.errorCity();
    return;
  }

  axios
    .get(`https://api.weatherapi.com/v1/current.json?key=${token}&q=${city}&aqi=no`)
    .then(function (response) {
      consoleMessages.forecast(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

startCLI();
