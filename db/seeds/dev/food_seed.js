/* eslint-disable linebreak-style */
exports.seed = function(knex, Promise) {
  return knex('food').del() // Deletes ALL existing entries
      .then(function() { // Inserts seed entries one by one in series
        return knex('food').insert({
          name: 'broccoli',
          fat: 2,
          protein: 10,
          carbs: 15,
        });
      }).then(function() {
        return knex('food').insert({
          name: 'nuggets',
          fat: 200,
          protein: 10,
          carbs: 5,
        });
      }).then(function() {
        return knex('food').insert({
          name: 'tomato',
          fat: 2,
          protein: 10,
          carbs: 27,
        });
      }).then(function() {
        return knex('food').insert({
          name: 'beef',
          fat: 20,
          protein: 10,
          carbs: 15,
        });
      });
};
