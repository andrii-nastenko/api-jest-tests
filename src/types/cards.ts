import {type AxiosResponse} from 'axios';

export interface CreateCardPayload {
  cardName: string;
  idList: string;
}

export interface CreateCardsPayload {
  count: number;
  idList: string;
}

export interface UpdateCardPayload {
  cardId: string;
  cardName: string;
}

export type CardResponse = Promise<AxiosResponse<Record<any, any>>>;
