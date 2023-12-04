/**
 * Copyright (c) VKU.NewEnergy.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Feedback",
  tableName: "feedback",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    charter_title: {
      type: "varchar",
    },
    search_keyword: {
      type: "varchar",
      default: "",
    },
    user_email: {
      type: "varchar",
      nullable: true,
    },
    response: {
      type: "varchar",
      nullable: true,
    },
    rate: {
      type: "int",
      default: 0,
    },
  },
});
