import { http } from "../config/http";
import * as faker from "faker";

describe("Cards:", () => {
  const idList = "60ec7973f09348111d97605c";
  const cardName = faker.name.title();

  let cardData: any;

  beforeEach(async () => {
    const { data } = await http.post(`/1/cards?name=${cardName}&idList=${idList}`);
    cardData = data;
  });

  afterEach(async () => {
    await http.delete(`/1/cards/${cardData.id}`).catch(() => null);
  });

  it("should create new card", async () => {
    expect(cardData.name).toBe(cardName);
    expect(Object.keys(cardData)).toHaveLength(34);
  });

  it("should get card info", async () => {
    const { data, status } = await http.get(`/1/cards/${cardData.id}`);

    expect(data.name).toContain(cardName);
    expect(Object.keys(data)).toHaveLength(31);
    expect(status).toBe(200);
  });

  it("should update card name", async () => {
    const newCardName = faker.name.title();

    const { data, status } = await http.put(
      `/1/cards/${cardData.id}?name=${newCardName}`
    );

    expect(data.name).toContain(newCardName);
    expect(Object.keys(data)).toHaveLength(31);
    expect(status).toBe(200);
  });

  it("should delete card", async () => {
    const { data, status } = await http.delete(`/1/cards/${cardData.id}`);

    expect(Object.keys(data)).toContain("limits");
    expect(status).toBe(200);
  });
});
