import {type PartialDeep} from 'type-fest';
import {type CSV_REPORT} from 'src/types/downloads';

/** Check partial csv report */
export function csvReportContentResponse(data: PartialDeep<CSV_REPORT>): jest.Expect {
  return expect.arrayContaining(
    data.map((obj) =>
      expect.objectContaining({
        Index: obj?.Index ?? expect.any(String),
        'Organization Id': obj?.['Organization Id'] ?? expect.any(String),
        Name: obj?.Name ?? expect.any(String),
        Website: obj?.Website ?? expect.any(String),
        Country: obj?.Country ?? expect.any(String),
        Description: obj?.Description ?? expect.any(String),
        Founded: obj?.Founded ?? expect.any(String),
        Industry: obj?.Industry ?? expect.any(String),
        'Number of employees': obj?.['Number of employees'] ?? expect.any(String),
      })
    )
  );
}
