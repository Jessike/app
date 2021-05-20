
const knex = require('./knex');

const createUse = async (email, hash) => {
  const result = await knex('users').insert({email, hash}).returning('*');
  return result[0];
};

const insertFood = async (name, fat, protein, carbs) => {
  const result = await knex('food')
      .insert({name, fat, protein, carbs}).returning('*');
  return result;
};

const insertGoal = async (fat, protein, carbs, userId) => {
  const result = await knex('goals')
      .insert({fat, protein, carbs, userId}).returning('*');
  return result;
};

const getGoal = async (userId) => {
  const result = knex('goals').where('userId', userId);
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

const foodForUser = async ({fat, protein, carbs, name}, amount, userId) => {
  const result = await knex('user_food')
      .insert({name, amount, userId, fat, protein, carbs}).returning('*');
  return result;
};

const searchFoodByName = async (name) => {
  const result = await knex('food').where('name', name);
  return result[0];
};

const searchFoodByDate = async (date, userId) => {
  const result = await knex('user_food')
      .where('created_at', '=', date).andWhere('userId', userId);
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
  foodForUser,
  searchFoodByName,
  searchFoodByDate,
  getGoal,
};
