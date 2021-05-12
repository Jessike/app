
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_food', function(table) {
    table.increments();
    table.integer('fat');
    table.integer('protein');
    table.integer('carbs');
    table.integer('calories');
    table.integer('amount');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.bigInteger('userId').references('id').inTable('users');
  });
};
  
  
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_food');
};
  