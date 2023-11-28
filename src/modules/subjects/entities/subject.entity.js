const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Subject',
  tableName: 'subjects',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    }
  },
  relations: {
    topic: {
      target: 'Topic',
      type: 'many-to-one',
      joinTable: true,
      cascade: true,
    },
  },
});
