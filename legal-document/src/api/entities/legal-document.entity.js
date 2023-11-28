const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'LegalDocument',
  tableName: 'legal_documents',
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
