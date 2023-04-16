import {CardsApiCaller} from 'src/api/cards/cards-api-caller';
import {DataGenerator} from 'src/helpers/data-generator';
import {Errors} from 'tests/cards/responses';

describe('Cards:', () => {
  const cardsApiCaller = new CardsApiCaller();
  const idList = process.env.LIST_ID;
  const cardName = DataGenerator.generateString(5);
  let cardData: Record<any, any>;

  beforeEach(async () => {
    ({data: cardData} = await cardsApiCaller.createCard({cardName, idList}));
  });

  afterEach(async () => {
    await cardsApiCaller.deleteCard(cardData.id).catch((error) => error);
  });

  it('should create new card', async () => {
    expect(cardData.name).toEqual(cardName);
    expect(Object.keys(cardData)).toHaveLength(34);
  });

  it('should get card info', async () => {
    const {data, status} = await cardsApiCaller.getCard(cardData.id);

    expect(data.name).toEqual(cardName);
    expect(Object.keys(data)).toHaveLength(31);
    expect(status).toEqual(200);
  });

  it('should update card name', async () => {
    const newCardName = DataGenerator.generateString(5);
    const {data, status} = await cardsApiCaller.updateCard({
      cardName: newCardName,
      cardId: cardData.id,
    });

    expect(data.name).toEqual(newCardName);
    expect(Object.keys(data)).toHaveLength(31);
    expect(status).toEqual(200);
  });

  it('should delete card', async () => {
    const {data, status} = await cardsApiCaller.deleteCard(cardData.id);

    expect(Object.keys(data)).toInclude('limits');
    expect(status).toEqual(200);
  });

  it('should return error on getting not existing card', async () => {
    const notExistingId = DataGenerator.generateStringOfNumbers(24);
    const response = await cardsApiCaller.getCard(notExistingId);

    expect(response, 'expect error').toEqual(Errors.cardNotFound);
  });
});
