/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "notifications";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id");
    table.integer("client_id").unsigned().nullable();
    table.integer("topic_id").unsigned().nullable();
    table.json("data").notNullable();
    table.timestamps(true, true);

    table.foreign("client_id").references("id").inTable("clients");
    table.foreign("topic_id").references("id").inTable("topics");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
