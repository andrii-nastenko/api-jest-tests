import {PetStoreApiCaller} from 'src/api/pet-store/pet-store-api-caller';
import {
  downloadSchema,
  getEndpointSchema,
  validateResponse,
} from 'src/helpers/schema-validator';

describe('Swagger schema/API response checks:', () => {
  const petStoreApiCaller = new PetStoreApiCaller();
  let schema: Awaited<ReturnType<typeof downloadSchema>>;

  beforeAll(async () => {
    schema = await downloadSchema(process.env.SWAGGER_JSON_URL);
  });

  it('should validate api response according to schema', async () => {
    const {data} = await petStoreApiCaller.findByStatus('available');
    const endpointSchema = getEndpointSchema(schema, '/pet/findByStatus', 'get', 200);
    const response = validateResponse(endpointSchema, data);

    expect(response).toEqual(true);
  });
});
