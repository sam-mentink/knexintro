var development = require('./knexfile').development
var knex = require('knex')(development)

knex('superheroes')
 .insert({
   'name':'batman',
   'kills': '300',
   'powers': 'rich, good looking, bad ass'
 })
 .into('superheroes')
 .then(console.log)
 .catch(console.eror)
