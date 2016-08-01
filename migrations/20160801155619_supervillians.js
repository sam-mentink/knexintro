
exports.up = function(knex, Promise) {
  return knex.schema.createTable('supervillians', function (table){
table.increments('id').primary()
table.string('name')
table.string('nemesis')
table.integer('victories')
});
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('supervillians')
};
