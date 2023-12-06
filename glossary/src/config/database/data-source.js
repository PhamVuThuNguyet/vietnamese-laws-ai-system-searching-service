/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const { DataSource } = require('typeorm');
const envConfig = require('../environment.config');
const TopicEntity = require('../../api/entities/glossary.entity');

const options = {
  type: envConfig.database_type,
  host: envConfig.database_host,
  port: envConfig.database_port,
  username: envConfig.database_user,
  password: envConfig.database_password,
  database: envConfig.database_name,
  synchronize: true,
  logging: true,
  entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
  subscribers: [],
  migrationsRun: false,
  migrations: [],
};

const dataSource = new DataSource(options);

module.exports = {
  options,
  dataSource,
};
