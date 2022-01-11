import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.js';

export const receiveWeather = async (city) => {
  const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);

  if (!token) {
    throw new Error('Не задан ключ API. Задайте его через команду -t [API_KEY]');
  }
  
  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: 'ru',
      units: 'metric',
    },
  });

  return data;
};
