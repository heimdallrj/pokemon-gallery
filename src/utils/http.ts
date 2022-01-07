import axios from 'axios';
import { apiBaseUrl } from 'config';

export const init = () => {
  axios.defaults.baseURL = apiBaseUrl;
};

export const get = (url: string, options = {}) => axios.get(url, options);
