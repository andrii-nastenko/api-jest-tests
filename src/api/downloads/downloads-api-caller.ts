import {ApiCaller} from 'src/api/api-caller';
import {type AxiosResponse} from 'axios';

class DownloadsApiCaller extends ApiCaller {
  downloadFile(url: string): Promise<AxiosResponse<any, any>> {
    return this.get(url, {responseType: 'arraybuffer'});
  }
}

export {DownloadsApiCaller};
