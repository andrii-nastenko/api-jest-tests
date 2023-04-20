import {CardsApiCaller} from 'src/api/cards/cards-api-caller';
import {times} from 'lodash';
import {DataGenerator} from 'src/helpers/data-generator';
import {type CreateCardsPayload} from 'src/types/cards';

class CardsApiHelpers extends CardsApiCaller {
  createCards({count, idList}: CreateCardsPayload): Promise<Array<Record<any, any>>> {
    return Promise.all(
      times(count, () =>
        this.createCard({
          cardName: DataGenerator.generateString(5),
          idList,
        })
      )
    );
  }
}

export {CardsApiHelpers};
