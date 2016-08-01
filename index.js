var development = require('./knexfile').development
var knex = require('knex')(development)
var express = require('express')

var app = express()

app.get('/', function (req, res) {
  res.send('Hello World' )
})

var data =
  knex('superheroes')
    .then(getKills)
    .then(showKills)
    .catch(console.error)

// knex('superheroes')
//  .insert({
//    'name':'batman',
//    'kills': '300',
//    'powers': 'rich, good looking, bad ass'
//  })
//  .into('superheroes')
//  .then(getKills)
//  //.then(showKills)
//  .then(updateKills)
//  .then(deleteIfNotLethal)
//  .then(getKills)
//  .then(showKills)
//  .catch(console.error)
//
 function getKills () {
   return knex('superheroes').select('kills')
 }
//
//  function showDate () {
//   return knex('superheroes').select('superheroes.date')
// }
//
 function showKills (number) {
   return number
 }
//
//
// function updateKills () {
//   return knex('superheroes')
//    .update({kills: 99999})
//    .where({name: 'Your mom'})
// }
//
// function deleteIfNotLethal () {
//   return knex('superheroes')
//    .del()
//    .where('kills', '<' , 5500)
// }

app.listen (3000, function(){
  console.log('batman is alive')
})
