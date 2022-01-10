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
