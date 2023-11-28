const { DataSource } = require('typeorm');
const envConfig = require('../environment.config');

const AppDataSource = new DataSource({
  type: envConfig.database_type,
  host: envConfig.database_host,
  port: envConfig.database_port,
  username: envConfig.database_user,
  password: envConfig.database_password,
  database: envConfig.database_name,
  synchronize: true,
  logging: false,
  entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
  subscribers: [],
  migrations: [],
});

module.exports = AppDataSource;
