const { dataSource } = require('./data-source');

const connectDB = async () => {
  return dataSource.initialize();
};

module.exports = connectDB;
