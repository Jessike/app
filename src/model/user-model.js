
const knex = require('../knex');

const createUse = async (name, email, hash) => {
  const result = await knex('users').insert({name, email, hash}).returning('*');
  return result[0];
};

const getUser = async (email) => {
  const result = await knex('users').where('email', email);
  return result[0];
};

module.exports = {
  createUse,
  getUser,
};
