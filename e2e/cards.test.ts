import { http } from '../config/http';
import * as faker from 'faker';

describe('Cards:', function () {
  const idList = '60ec7973f09348111d97605c';
  const cardName = faker.datatype.string(10);
  let cardData: any;

  beforeEach(async function () {
    const { data } = await http.post(`/1/cards?name=${cardName}&idList=${idList}`);
    cardData = data;
  });

  afterEach(async function () {
    await http.get(`/1/cards/${cardData.id}`).catch(() => {});
  });

  describe('Card actions:', function () {
    it('should delete card', async function () {
      const { data, status } = await http.delete(`/1/cards/${cardData.id}`);

      expect(Object.keys(data)).toContain('limits');
      expect(status).toEqual(200);
    });

    it('should get card info', async function () {
      const { data, status } = await http.get(`/1/cards/${cardData.id}`);

      expect(data.name).toContain(cardName);
      expect(Object.keys(data).length).toEqual(31);
      expect(status).toEqual(200);
    });

    it('should update card name', async function () {
      const newCardName = faker.datatype.string(10);
      const { data, status } = await http.put(
        `/1/cards/${cardData.id}?name=${newCardName}`
      );

      expect(data.name).toContain(newCardName);
      expect(Object.keys(data).length).toEqual(31);
      expect(status).toEqual(200);
    });

    it('should create new card', async function () {
      expect(Object.keys(cardData).length).toEqual(34);
      expect(cardData.name).toEqual(cardName);
    });
  });
});
