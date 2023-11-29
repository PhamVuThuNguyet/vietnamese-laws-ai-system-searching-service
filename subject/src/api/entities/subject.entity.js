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
    },
    topic_id: {
      type: 'int',
    },
  },
});
