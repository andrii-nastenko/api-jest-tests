import { http } from "../config/http";

describe("Cards:", function () {
  const idList = "60ec7973f09348111d97605c";
  const cardName = "test_card";

  let cardData = {
    id: null,
    name: null
  };

  beforeEach(async function () {
    const { data } = await http.post(`/1/cards?name=${cardName}&idList=${idList}`);
    cardData = data;
  });

  afterEach(async function () {
    await http.get(`/1/cards/${cardData.id}`).catch(() => ({}));
  });

  it("should delete card", async function () {
    const { data, status } = await http.delete(`/1/cards/${cardData.id}`);

    expect(Object.keys(data)).toContain("limits");
    expect(status).toBe(200);
  });

  it("should get card info", async function () {
    const { data, status } = await http.get(`/1/cards/${cardData.id}`);

    expect(data.name).toContain(cardName);
    expect(Object.keys(data)).toHaveLength(31);
    expect(status).toBe(200);
  });

  it("should update card name", async function () {
    const newCardName = "new_name";
    const { data, status } = await http.put(
      `/1/cards/${cardData.id}?name=${newCardName}`
    );

    expect(data.name).toContain(newCardName);
    expect(Object.keys(data)).toHaveLength(31);
    expect(status).toBe(200);
  });

  it("should create new card", async function () {
    expect(cardData.name).toBe(cardName);
    expect(Object.keys(cardData)).toHaveLength(34);
  });
});
