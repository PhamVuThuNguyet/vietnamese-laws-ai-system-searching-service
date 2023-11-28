const { DataSource } = require('typeorm');
const envConfig = require('../environment.config');

const AppDataSource = new DataSource({
  type: 'mysql',
  host: envConfig.mysql_host,
  port: envConfig.mysql_port,
  username: envConfig.mysql_user,
  password: envConfig.mysql_password,
  database: envConfig.mysql_database,
  synchronize: true,
  logging: false,
  entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
  subscribers: [],
  migrations: [],
});

module.exports = AppDataSource;
