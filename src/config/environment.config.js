const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
  PORT: Joi.number().default(3001),
  MYSQL_HOST: Joi.string().required().description('MYSQL HOST'),
  MYSQL_PORT: Joi.number().required().description('MYSQL PORT'),
  MYSQL_DATABASE: Joi.string().required().description('MYSQL DATABASE'),
  MYSQL_USER: Joi.string().required().description('MYSQL USER'),
  MYSQL_PASSWORD: Joi.string().required().description('MYSQL PASSWORD'),
});

const { value: envVars, error } = envVarsSchema.validate(process.env);

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mysql_host: envVars.MYSQL_HOST,
  mysql_port: envVars.MYSQL_PORT,
  mysql_database: envVars.MYSQL_DATABASE,
  mysql_user: envVars.MYSQL_USER,
  mysql_password: envVars.MYSQL_PASSWORD,
};
