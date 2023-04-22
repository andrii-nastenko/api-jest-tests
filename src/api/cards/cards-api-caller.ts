import {ApiCaller} from 'src/api/api-caller';
import {
  type CardResponse,
  type CreateCardPayload,
  type UpdateCardPayload,
} from 'src/types/cards';
import {type AxiosResponse} from 'axios';

const API_PATH = '/1/cards';

class CardsApiCaller extends ApiCaller {
  createCard({
    cardName,
    idList,
  }: CreateCardPayload): Promise<AxiosResponse<CardResponse>> {
    return this.post(API_PATH, {}, {params: {name: cardName, idList}});
  }
  deleteCard(cardId: string): Promise<AxiosResponse<CardResponse>> {
    return this.delete(`${API_PATH}/${cardId}`);
  }
  updateCard({
    cardName,
    cardId,
  }: UpdateCardPayload): Promise<AxiosResponse<CardResponse>> {
    return this.put(`${API_PATH}/${cardId}`, {}, {params: {name: cardName}});
  }
  getCard(cardId: string): Promise<AxiosResponse<CardResponse>> {
    return this.get(`${API_PATH}/${cardId}`);
  }
}

export {CardsApiCaller};
