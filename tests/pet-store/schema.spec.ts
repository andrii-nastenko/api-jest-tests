import {PetStoreApiCaller} from 'src/api/pet-store/pet-store-api-caller';
import {
  downloadSchema,
  getEndpointSchema,
  validateResponse,
} from 'src/helpers/schema-validator';
import {type Status} from 'src/types/pet-store';

describe('Swagger schema/API response checks:', () => {
  const petStoreApiCaller = new PetStoreApiCaller();
  let schema: Awaited<ReturnType<typeof downloadSchema>>;

  beforeAll(async () => {
    schema = await downloadSchema(process.env.SWAGGER_JSON_URL);
  });

  it.each([{status: 'available'}, {status: 'sort'}, {status: 'pending'}])(
    'should validate api response according to schema',
    async ({status}) => {
      const {data} = await petStoreApiCaller.findByStatus(status as Status);
      const endpointSchema = getEndpointSchema(schema, '/pet/findByStatus', 'get', 200);
      const response = validateResponse(endpointSchema, data);

      expect(response).toEqual(true);
    }
  );
});
