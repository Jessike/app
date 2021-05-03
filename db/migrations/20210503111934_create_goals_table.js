
exports.up = function(knex, Promise) {
    return knex.schema.createTable('goals', function(table) {
      table.increments();
      table.integer('fat');
      table.integer('protein');
      table.integer('carbs');
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('goals');
  }
