import {ApiCaller} from 'src/api/api-caller';
import {type AxiosResponse} from 'axios';
import {type PetsResponse, type Status} from 'src/types/pet-store';

const API_PATH = '/v2/pet';

class PetStoreApiCaller extends ApiCaller {
  constructor() {
    super({baseURL: process.env.PET_STORE_API});
  }
  findByStatus(status: Status): Promise<AxiosResponse<PetsResponse>> {
    return this.get(`${API_PATH}/findByStatus`, {params: {status}});
  }
}

export {PetStoreApiCaller};
