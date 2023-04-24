import {DownloadsApiCaller} from 'src/api/downloads/downloads-api-caller';
import {parse} from 'csv-string';
import {type CSV_REPORT} from 'src/types/downloads';

class DownloadsApiHelpers extends DownloadsApiCaller {
  downloadAndParseSCV(url: string): Promise<CSV_REPORT> {
    return this.downloadFile(url).then(
      ({data}) => parse(data.toString(), {output: 'objects'}) as CSV_REPORT
    );
  }
}

export {DownloadsApiHelpers};
