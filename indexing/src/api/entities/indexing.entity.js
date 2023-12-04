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
    subject_id: {
      type: 'int',
    },
    level: {
      type: 'int',
      default: 0,
    },
    ordinal_number: {
      type: 'int',
      nullable: true,
    },
    parent_indexing_id: {
      type: 'int',
      nullable: true,
    },
  },
});
