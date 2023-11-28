const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Charter',
  tableName: 'charters',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
  },
});
