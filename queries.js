
const knex = require('./knex');

const createUse = async (email, hash) => {
  const result = await knex('users').insert({email, hash}).returning('*');
  return result[0];
};

const insertFood = async (name, fat, protein, carbs) => {
  const result = await knex('food')
      .insert({name: name, fat: fat, protein: protein, carbs: carbs});
  return result;
};

const insertGoal = async (fat, protein, carbs, userId) => {
  const result = await knex('goals')
      .insert({fat: fat, protein: protein, carbs: carbs, userId: userId});
  return result;
};

const getUser = async (email) => {
  const result = await knex('users').where('email', email);
  return result[0];
};

const searchFoodById = async (id) => {
  const result = await knex('food').where('id', id);
  return result[0];
};

const getFoods = async (keyword) => {
  const result = await knex('food').where('name', 'like', keyword + '%');
  return result;
};

module.exports = {
  knex,
  createUse,
  insertFood,
  insertGoal,
  getUser,
  searchFoodById,
  getFoods,
};
