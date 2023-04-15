import {DbCaller} from 'src/db/db-caller';

describe('Get sql queries from Users table:', () => {
  const dbCaller = new DbCaller();

  beforeAll(async () => {
    await dbCaller.query('CREATE TABLE users (Id INT, Age INT, Name NVARCHAR(20))');
    await dbCaller.query('INSERT INTO users VALUES(1, 30, "Andrew")');
  });

  afterAll(async () => {
    await dbCaller.query('DROP TABLE users');
  });

  it('Get user name and age by id', async () => {
    const response = await dbCaller.query('SELECT Name, Age FROM users WHERE Id = 1');

    expect(response).toEqual({Name: 'Andrew', Age: 30});
  });
});
