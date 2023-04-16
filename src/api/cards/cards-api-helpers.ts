import {CardsApiCaller} from 'src/api/cards/cards-api-caller';
import {times} from 'lodash';
import {DataGenerator} from 'src/helpers/data-generator';
import {type CreateCardsPayload} from 'src/types/cards';

const cardsApiCaller = new CardsApiCaller();

export function createCards({
  count,
  idList,
}: CreateCardsPayload): Promise<Array<Record<any, any>>> {
  return Promise.all(
    times(count, () =>
      cardsApiCaller.createCard({cardName: DataGenerator.generateString(5), idList})
    )
  );
}
