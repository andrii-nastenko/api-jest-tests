import {DownloadsApiCaller} from 'src/api/downloads/downloads-api-caller';
import {parse} from 'csv-string';

class DownloadsApiHelpers extends DownloadsApiCaller {
  async downloadAndParseSCV(url: string): Promise<Array<Record<string, string>>> {
    return await this.downloadFile(url).then(({data}) =>
      parse(data.toString(), {output: 'objects'})
    );
  }
}

export {DownloadsApiHelpers};
