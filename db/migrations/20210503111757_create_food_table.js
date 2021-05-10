
exports.up = function(knex, Promise) {
    return knex.schema.createTable('food', function(table) {
      table.increments();
      table.string('name').notNullable();
      table.integer('fat').notNullable();
      table.integer('protein').notNullable();
      table.integer('carbs').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  }