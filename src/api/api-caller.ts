import axios, {type AxiosInstance, type CreateAxiosDefaults} from 'axios';

class ApiCaller {
  private readonly timeout = 30000;
  api: AxiosInstance;
  constructor(config?: CreateAxiosDefaults<any> | undefined) {
    this.api = axios.create({
      baseURL: process.env.TRELLO_API,
      params: {
        key: process.env.TRELLO_KEY,
        token: process.env.TRELLO_TOKEN,
      },
      timeout: this.timeout,
      validateStatus: (status) => {
        return status >= 200 && status < 500;
      },
      ...config,
    });
  }
}

export {ApiCaller};
