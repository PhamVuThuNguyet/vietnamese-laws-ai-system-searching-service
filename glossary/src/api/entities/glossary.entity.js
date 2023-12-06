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
  name: 'Glossary',
  tableName: 'glossaries',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    term: {
      type: 'text',
    },
    desc: {
      type: 'text',
    },
    source: {
      type: 'varchar',
    },
  },
});
