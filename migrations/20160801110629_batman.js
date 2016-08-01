
exports.up = function(knex, Promise) {
  return knex.schema.createTable('superheroes', function (table){
table.increments('id').primary()
table.string('name')
table.integer('kills')
table.boolean('powers')
table.date('date')
});
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('superheroes')
};
