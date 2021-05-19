exports.seed = function(knex, Promise) {
  return knex('goals').del()
      .then(function() {
        return knex('users').del();
      }) // Deletes ALL existing entries
      .then(function() { // Inserts seed entries one by one in series
        return knex('users').insert({
          id: 69,
          email: 'kris@gmail.com',
          hash: '$2a$10$RhPejEk041zdjsqPwp7rOO/Qo8OTBJhxzk.N2YGO9QV1lpF8Cabdm',
        });
      })
      .then(function() {
        return knex('user_food').del();
      }) // Deletes ALL existing entries
      .then(function() { // Inserts seed entries one by one in series
        return knex('user_food').insert({
          name: 'broccoli',
          fat: 10,
          protein: 100,
          carbs: 30,
          created_at: '2021-05-12',
          amount: 1,
          userId: 69,
        });
      }).then(function() {
        return knex('goals').insert({
          fat: 10,
          protein: 100,
          carbs: 30,
          userId: 69,
        });
      });
};

