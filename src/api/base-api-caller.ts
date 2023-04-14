import axios, {type AxiosInstance, type CreateAxiosDefaults} from 'axios';

class BaseApiCaller {
  static api: AxiosInstance;
  timeout: number = 30000;
  constructor(config?: CreateAxiosDefaults<any> | undefined) {
    axios.create({
      baseURL: process.env.TRELLO_API,
      params: {
        key: process.env.TRELLO_KEY,
        token: process.env.TRELLO_TOKEN,
      },
      timeout: this.timeout,
      ...config,
    });
  }
}

export {BaseApiCaller};
