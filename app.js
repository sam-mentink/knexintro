var development = require('./knexfile').development
var knex = require('knex')(development)

knex('supervillians')
 .insert({
   'name':'joker',
   'victories': '500',
   'nemesis': 'batman, penquin'
 })
 .into('supervillians')
 .then(getKills)
 //.then(showKills)
 // .then(updateKills)
 .then(deleteIfNotLethal)
 .then(getKills)
 .then(showKills)
 .catch(console.error)

 function getKills () {
   return knex('supervillians').select('victories')
 }

 function showKills (number) {
   console.log(number)
 }


// function updateKills () {
//   return knex('supervillians')
//    .update({victories: 99999})
//    .where({name: 'Your mom'})
// }

function deleteIfNotLethal () {
  return knex('supervillians')
   .del()
   .where('victories', '>' , 5500)
}
