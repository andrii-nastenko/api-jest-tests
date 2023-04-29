import axios, {Axios, type AxiosRequestConfig} from 'axios';

class ApiCaller extends Axios {
  constructor(config?: AxiosRequestConfig) {
    super({
      timeout: 30000,
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
