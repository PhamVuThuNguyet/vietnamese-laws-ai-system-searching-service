const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
  PORT: Joi.number().default(3001),
  DATABASE_TYPE: Joi.string().required().description('DATABASE TYPE'),
  DATABASE_HOST: Joi.string().required().description('DATABASE HOST'),
  DATABASE_PORT: Joi.number().required().description('DATABASE PORT'),
  POSTGRES_DB: Joi.string().required().description('DATABASE NAME'),
  POSTGRES_USER: Joi.string().required().description('DATABASE USERNAME'),
  POSTGRES_PASSWORD: Joi.string().required().description('DATABASE PASSWORD'),
});

const { value: envVars, error } = envVarsSchema.validate(process.env);

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  database_type: envVars.DATABASE_TYPE,
  database_host: envVars.DATABASE_HOST,
  database_port: envVars.DATABASE_PORT,
  database_name: envVars.POSTGRES_DB,
  database_user: envVars.POSTGRES_USER,
  database_password: envVars.POSTGRES_PASSWORD,
};
