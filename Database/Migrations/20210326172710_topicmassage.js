/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "topic_massages";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id");
    table.integer("topic_id").unsigned().notNullable();
    table.string("message").notNullable();
    table.timestamps(true, true);
    table.foreign("topic_id").references("id").inTable("topics");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
