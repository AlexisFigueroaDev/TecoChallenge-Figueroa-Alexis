import axios from 'axios';

const baseURL = 'http://api.openweathermap.org/data/2.5/';

export default (url, method, data, params) => {
  return axios({
    baseURL,
    method,
    url,
    params: {
      appid: '73ffa4423dacbbbc0d0eb3a7c9b9d607',
      units: 'metric',
      lang: 'es',
    },
  });
};
