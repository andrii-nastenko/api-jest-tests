import {DbCaller} from 'src/db/db-caller';

describe('Get sql queries from Users table:', () => {
  const dbCaller = new DbCaller();

  beforeAll(async () => {
    await dbCaller.execute({
      sql: 'CREATE TABLE users (Id INT, Age INT, Name NVARCHAR(20))',
    });
    await dbCaller.execute({sql: 'INSERT INTO users VALUES(1, 32, "Andrew")'});
  });

  afterAll(async () => {
    await dbCaller.execute({sql: 'DROP TABLE users'});
    await dbCaller.disconnect();
  });

  it('should get user name and age by id', async () => {
    const response = await dbCaller.execute({
      sql: 'SELECT Name, Age FROM users WHERE Id = 1',
    });

    expect(response[0]).toHaveLength(1);
    expect(response[0]).toIncludeAllMembers([{Name: 'Andrew', Age: 32}]);
  });
});
