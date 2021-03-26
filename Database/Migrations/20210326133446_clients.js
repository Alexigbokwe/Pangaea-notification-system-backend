/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "clients";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id");
    table.string("url").unique().notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
