import {BaseApiCaller} from 'src/api/base-api-caller';
import {type CreateCard, type UpdateCard} from 'src/types/cards';

const API_PATH = '/1/cards';

class CardsApiCaller extends BaseApiCaller {
  static createCard({cardName, idList}: CreateCard): Promise<Record<any, any>> {
    return this.api.post(API_PATH, {}, {params: {cardName, idList}});
  }
  static deleteCard(cardId: string): Promise<Record<any, any>> {
    return this.api.delete(`${API_PATH}/${cardId}`);
  }
  static updateCard({cardName, cardId}: UpdateCard): Promise<Record<any, any>> {
    return this.api.put(`${API_PATH}/${cardId}`, {params: {cardName}});
  }
  static getCard(cardId: string): Promise<Record<any, any>> {
    return this.api.get(`${API_PATH}/${cardId}`);
  }
}

export {CardsApiCaller};
