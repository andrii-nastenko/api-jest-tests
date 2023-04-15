import {
  type Connection,
  type ConnectionConfig,
  createConnection,
  type QueryOptions,
} from 'mysql';

class DbCaller {
  connection: Connection;
  constructor(config?: ConnectionConfig) {
    this.connection = createConnection({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ...config,
    });
  }
  connect(): void {
    this.connection.connect();
  }
  disconnect(): void {
    this.connection.end();
  }
  query(params: string | QueryOptions): Promise<unknown> {
    this.connect();
    return new Promise((resolve, reject) => {
      this.connection.query(params, (error, results) => {
        if (error) reject(error);
        else {
          this.disconnect();
          resolve(results);
        }
      });
    });
  }
}

export {DbCaller};
