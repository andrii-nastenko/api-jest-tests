import {ApiCaller} from 'src/api/api-caller';
import {
  type CardResponse,
  type CreateCardPayload,
  type UpdateCardPayload,
} from 'src/types/cards';
import {type AxiosResponse} from 'axios';

const API_PATH = '/1/cards';

class CardsApiCaller extends ApiCaller {
  async createCard({
    cardName,
    idList,
  }: CreateCardPayload): Promise<AxiosResponse<CardResponse>> {
    return await this.post(API_PATH, {}, {params: {name: cardName, idList}});
  }
  async deleteCard(cardId: string): Promise<AxiosResponse<CardResponse>> {
    return await this.delete(`${API_PATH}/${cardId}`);
  }
  async updateCard({
    cardName,
    cardId,
  }: UpdateCardPayload): Promise<AxiosResponse<CardResponse>> {
    return await this.put(`${API_PATH}/${cardId}`, {}, {params: {name: cardName}});
  }
  async getCard(cardId: string): Promise<AxiosResponse<CardResponse>> {
    return await this.get(`${API_PATH}/${cardId}`);
  }
}

export {CardsApiCaller};
