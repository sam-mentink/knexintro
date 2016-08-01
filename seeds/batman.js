
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('superheroes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('superheroes').insert({id: 1, name: 'superman' , kills: '3', powers: true, date: '1912.10.32'}),
        knex('superheroes').insert({id: 2, name: 'Austen Powers' , kills: '4' , powers: false, date: '37.99.01'}),
        knex('superheroes').insert({id: 3, name: 'Your mom' , kills: '79001' , powers: true, date: '12.01.00'})
      ]);
    });
};
