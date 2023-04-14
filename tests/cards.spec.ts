import {CardsApiCaller} from 'src/api/cards/cards-api-caller';
import {generateString} from 'src/helpers/generator';

describe('Cards:', () => {
  const cardsApiCaller = new CardsApiCaller();
  const idList = process.env.LIST_ID;
  const cardName = generateString(5);
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
    const newCardName = generateString(5);
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

    expect(Object.keys(data)).toContain('limits');
    expect(status).toEqual(200);
  });
});
