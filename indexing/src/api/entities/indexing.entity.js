const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Indexing',
  tableName: 'indexing',
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
