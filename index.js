#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError, printWeather } from './services/log.js';
import { saveKeyValue, getKeyValue, TOKEN_DICTIONARY } from './services/storage.js';
import { receiveWeather } from './services/api.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('Не передан токен');
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('Токен сохранен');
  }
  catch (err) {
    printError(err.message);
  }
};

const saveCity = async (city) => {
  if (!city) {
    printError('Не передан город');
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess('Город сохранен');
  }
  catch (err) {
    printError(err.message);
  }
};

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
    const weather = await receiveWeather(city);

    printWeather(weather, '');
  }
  catch (err) {
    switch (err?.response?.status) {
      case 404:
        printError('Неправильно указан город');
        break;

      case 401:
        printError('Неправильно указан токен');
        break;

      case undefined:
      default:
        printError(err.message ?? 'Что-то пошло не так :(');
        break;
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }

  getForcast();
};

initCLI();
