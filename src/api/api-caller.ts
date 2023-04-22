import axios, {Axios, type AxiosRequestConfig} from 'axios';

class ApiCaller extends Axios {
  constructor(config?: AxiosRequestConfig) {
    super({
      baseURL: process.env.TRELLO_API,
      timeout: 30000,
      params: {
        key: process.env.TRELLO_KEY,
        token: process.env.TRELLO_TOKEN,
      },
      validateStatus: (status) => {
        return status >= 200 && status < 500;
      },
      transformRequest: axios.defaults.transformRequest,
      transformResponse: axios.defaults.transformResponse,
      ...config,
    });
  }
}

export {ApiCaller};
