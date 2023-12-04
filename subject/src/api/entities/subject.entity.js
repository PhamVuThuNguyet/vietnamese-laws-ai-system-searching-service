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