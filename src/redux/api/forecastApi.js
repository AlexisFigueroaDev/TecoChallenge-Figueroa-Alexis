import axios from 'axios';
import Config from 'react-native-config';

const baseURL = Config.BASE_URL;

export default (url, method, data, params) => {
  return axios({
    baseURL,
    method,
    url,
    params: {
      appid: Config.APPID,
      units: 'metric',
      lang: 'es',
    },
  });
};
