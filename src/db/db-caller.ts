import {
  createConnection,
  type Connection,
  type ConnectionOptions,
  type QueryOptions,
} from 'mysql2/promise';

class DbCaller {
  private readonly timeout = 30000;
  connection: Promise<Connection>;
  constructor(config?: ConnectionOptions) {
    this.connection = createConnection({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      insecureAuth: true,
      connectTimeout: this.timeout,
      connectionLimit: 1,
      ...config,
    });
  }
  async disconnect(): Promise<void> {
    await this.connection.then(async (con) => {
      await con.end();
    });
  }
  async execute(params: QueryOptions): Promise<any> {
    return await this.connection.then(async (con) => await con.execute(params));
  }
}

export {DbCaller};
