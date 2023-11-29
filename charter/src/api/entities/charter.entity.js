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
    doc_id: {
      type: 'int',
      nullable: true,
    },
    description: {
      type: 'text',
    },
    indexing_id: {
      type: 'int',
    },
    parent_charter_id: {
      type: 'int',
      nullable: true,
    },
  },
});
