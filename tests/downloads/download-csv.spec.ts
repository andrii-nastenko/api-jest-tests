import {DownloadsApiHelpers} from 'src/api/downloads/downloads-api-helpers';
import {csvReportContentResponse} from 'tests/downloads/responses';

describe('Downloads:', () => {
  const downloadsApiHelpers = new DownloadsApiHelpers();

  it('should download and parse csv file', async () => {
    const csvUrl = process.env.CSV_FILE_URL;
    const response = await downloadsApiHelpers.downloadAndParseSCV(csvUrl);

    expect(response).toHaveLength(100);
    expect(response).toEqual(
      csvReportContentResponse([
        {
          Index: '1',
          'Organization Id': 'FAB0d41d5b5d22c',
          Name: 'Ferrell LLC',
          Website: 'https://price.net/',
          Country: 'Papua New Guinea',
          Description: 'Horizontal empowering knowledgebase',
          Founded: '1990',
          Industry: 'Plastics',
          'Number of employees': '3498',
        },
      ])
    );
  });
});
