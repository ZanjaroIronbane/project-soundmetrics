import axios, { type AxiosRequestConfig } from 'axios';
import { stringifyParams } from '../utils/urlUtils';

interface Request<T> {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  urlParams?: T;
  config?: AxiosRequestConfig;
}

const getURL = <T>(url: string, urlParams?: T) => {
  if (!urlParams) {
    return url;
  }

  return `${url}?${stringifyParams(urlParams)}`;
};

export const makeRequest = async <T>({
  method,
  url,
  urlParams,
  config,
}: Request<T>) => {
  const requestConfig: AxiosRequestConfig = {
    baseURL: 'https://api.spotify.com',
    url: getURL(url, urlParams),
    method,
    headers: {
      'Content-Type': 'applicaiton/json',
      ...config?.headers,
    },
    cancelToken: axios.CancelToken.source().token,
    ...config,
  };

  const response = await axios(requestConfig);

  return response.data;
};
