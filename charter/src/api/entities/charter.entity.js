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
    level: {
      type: 'int',
      nullable: true,
    },
    note: {
      type: 'json',
      nullable: true,
    },
    related: {
      type: 'json',
      nullable: true,
    },
  },
});
