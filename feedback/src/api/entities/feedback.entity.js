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
