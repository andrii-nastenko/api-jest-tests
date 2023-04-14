import {CardsApiCaller} from 'src/api/cards/cards-api-caller';
import {generateString} from 'src/helpers/generator';

describe('Cards:', () => {
  const idList = process.env.LIST_ID;
  const cardName = generateString(5);
  let cardData: Record<any, any>;

  beforeEach(async () => {
    ({data: cardData} = await CardsApiCaller.createCard({cardName, idList}));
  });

  afterEach(async () => {
    await CardsApiCaller.deleteCard(cardData.id).catch((error) => error);
  });

  it('should create new card', async () => {
    expect(cardData.name).toBe(cardName);
    expect(Object.keys(cardData)).toHaveLength(34);
  });

  it('should get card info', async () => {
    const {data, status} = await CardsApiCaller.getCard(cardData.id);

    expect(data.name).toContain(cardName);
    expect(Object.keys(data)).toHaveLength(31);
    expect(status).toBe(200);
  });

  it('should update card name', async () => {
    const newCardName = generateString(5);
    const {data, status} = await CardsApiCaller.updateCard({
      cardName: newCardName,
      cardId: cardData.id,
    });

    expect(data.name).toContain(newCardName);
    expect(Object.keys(data)).toHaveLength(31);
    expect(status).toBe(200);
  });

  it('should delete card', async () => {
    const {data, status} = await CardsApiCaller.deleteCard(cardData.id);

    expect(Object.keys(data)).toContain('limits');
    expect(status).toBe(200);
  });
});
