
const knex = require('../knex');

const createUse = async (email, hash) => {
  const result = await knex('users').insert({email, hash}).returning('*');
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
