import axios, { AxiosResponse } from 'axios';
import { apiBaseUrl } from 'config';

const responseInterceptor = (res: AxiosResponse) => {
  return res.data;
};

export const init = () => {
  axios.defaults.baseURL = apiBaseUrl;
  axios.interceptors.response.use(responseInterceptor);
};

export const get = (url: string, options = {}) => axios.get(url, options);
