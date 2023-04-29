import {DbCaller} from 'src/db/db-caller';
import {generateName, generateNumber} from 'src/helpers/data-generator';

describe('Get sql queries from Users table:', () => {
  const dbCaller = new DbCaller();
  const id = generateNumber(5);
  const age = generateNumber(2);
  const name = generateName();

  beforeAll(async () => {
    await dbCaller
      .execute({
        sql: 'CREATE TABLE users (Id INT, Age INT, Name NVARCHAR(20))',
      })
      .catch((error) => error);
    await dbCaller.execute({
      sql: `INSERT INTO users VALUES(${id}, ${age}, "${name}")`,
    });
  });

  afterAll(async () => {
    await dbCaller.execute({sql: 'DROP TABLE users'}).catch((error) => error);
    await dbCaller.disconnect();
  });

  it('should get user name and age by id', async () => {
    const response = await dbCaller.execute({
      sql: `SELECT Name, Age FROM users WHERE Id = ${id}`,
    });

    expect(response[0]).toHaveLength(1);
    expect(response[0]).toIncludeAllMembers([{Name: name, Age: age}]);
  });
});
