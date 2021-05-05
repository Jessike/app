
  const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'me',
      password : 'password',
      database : 'foodApp'
    }
  });

  const createUse = async (email, hash) => {
    const result = await knex('users').insert({email: email, hash: hash});
    
    return result;
  };

  const insertFood = async (name, fat, protein, carbs) => {
    const result = await knex('food').insert({name: name, fat: fat, protein: protein, carbs: carbs});
    
    return result;
  };

  const insertGoal = async (fat, protein, carbs, userId) => {
    const result = await knex('goals').insert({fat: fat, protein: protein, carbs: carbs, userId: userId});
    return result;
  }

  const getUser = async (email) => {
    const result = await knex('users').where('email', email);
    return result[0];
  };

  module.exports = {
    createUse,
    insertFood,
    insertGoal,
    getUser
  }