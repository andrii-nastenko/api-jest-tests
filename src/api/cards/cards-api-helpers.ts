import {CardsApiCaller} from 'src/api/cards/cards-api-caller';
import {times} from 'lodash';
import {type CreateCardsPayload} from 'src/types/cards';
import {generateString} from 'src/helpers/data-generator';

class CardsApiHelpers extends CardsApiCaller {
  async createCards({
    count,
    idList,
  }: CreateCardsPayload): Promise<Array<Record<any, any>>> {
    return await Promise.all(
      times(
        count,
        async () =>
          await this.createCard({
            cardName: generateString(5),
            idList,
          })
      )
    );
  }
}

export {CardsApiHelpers};
