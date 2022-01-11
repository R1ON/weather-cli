import chalk from 'chalk';

export const printError = (error) => {
  console.log(`${chalk.bgRed('ERROR')} ${error}`);
};

export const printSuccess = (message) => {
  console.log(`${chalk.bgGreen('SUCCESS')} ${message}`);
};

export const printHelp = () => {
  console.log(
    chalk.bgGray('HELP') + '\n',
    'Без параметров - вывод погоды' + '\n',
    '-s [CITY] - для установки города' + '\n',
    '-h - для вывода помощи' + '\n',
    '-t [APY_KEY] - для сохранения токена' + '\n',
  );
};

export const printWeather = (res) => {
  console.log(
    `Погода в городе ${chalk.bgBlueBright(res.name)}` + '\n',
    res.weather[0].description + '\n',
    `Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})` + '\n',
  );
};
