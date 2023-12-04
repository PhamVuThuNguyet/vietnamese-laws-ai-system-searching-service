/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

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
    doc_type: {
      type: 'varchar',
      nullable: true,
    },
    ordinal_number: {
      type: 'int',
      default: 0,
    },
    issued_date: {
      type: 'varchar',
    },
    effective_date: {
      type: 'varchar',
    },
    issuing_authority: {
      type: 'text',
    },
    is_expired: {
      type: 'varchar',
      nullable: true,
    },
    subject_id: {
      type: 'int',
      nullable: true,
    },
    ordinary_number_in_subject: {
      type: 'int',
      nullable: true,
    },
  },
});
