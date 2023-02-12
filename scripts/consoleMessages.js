import chalk from 'chalk';

const showHelp = () => {
  console.log(`
${chalk.bold.bgMagenta('HELP')}
${chalk.green('-h')} - Вывод меню подсказки
${chalk.green('-t')} - Сохранение токена
${chalk.green('-c')} - Сохранение города
${chalk.green('Без параметров')} - Вывод погоды
  `);
};

const errorMessage = (error) => {
  console.log(chalk.bgRed.bold('ERROR') + ' ' + error);
};
const successMessage = (msg) => {
  console.log(chalk.bgGreen.bold('SUCCESS') + ' ' + msg);
};

const errorToken = () => {
  console.log(chalk.bgRed.bold('Токен не передан!'));
};

const errorCity = () => {
  console.log(chalk.bgRed.bold('Город не передан!'));
};

const forecast = (response) => {
  console.log(`
${chalk.bold.bgMagenta('ПОГОДА ОНЛАЙН')}
Город - ${chalk.green(response.data.location.name)}
Температура - ${chalk.green(response.data.current.temp_c)} ${chalk.green(
    '°С',
  )}, ощущается как ${chalk.green(response.data.current.feelslike_c)} ${chalk.green('°С')}
Скорость ветра - ${chalk.green((response.data.current.wind_kph / 3.6).toFixed(2))} ${chalk.green(
    'м/с',
  )}
Влажность - ${chalk.green(response.data.current.humidity)} ${chalk.green('%')}
${chalk.bold.bgMagenta('ДОП. ИНФОРМАЦИЯ')}
Страна - ${chalk.green(response.data.location.country)}
Широта - ${chalk.green(response.data.location.lat)}
Долгота - ${chalk.green(response.data.location.lon)}
Дата и время - ${chalk.green(response.data.location.localtime)}
    `);
};

export default { showHelp, errorMessage, successMessage, errorToken, errorCity, forecast };
