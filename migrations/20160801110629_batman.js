
exports.up = function(knex, Promise) {
  return knex.schema.createTable('superheroes', function (table){
table.increments('id').primary()
table.string('name')
table.string('kills')
table.string('powers')
});
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('superheroes')
};
