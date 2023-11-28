const AppDataSource = require('./data-source');

const connectDB = async () => {
  return AppDataSource.initialize();
};

module.exports = connectDB;
