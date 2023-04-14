export interface CreateCard {
  cardName: string;
  idList: string;
}

export interface CreateCards {
  count: number;
  idList: string;
}

export interface UpdateCard {
  cardId: string;
  cardName: string;
}
