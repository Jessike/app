
const knex = require('./knex');
const {getAsync, setAsync, delAsync} = require('./cache');

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
  let value = await getAsync(id);
  console.log(value);
  value = value !== 'undefined' && JSON.parse(value) || null;
  if (!value) {
    value = await knex('food').where('id', id);
    await setAsync(id, JSON.stringify(value), 'EX', 3600);
  }
  return value[0];
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
      .where('created_at', '=', date)/* .andWhere('userId', userId) */;
  console.log(result);
  return result;
};

const updateUserFood =
async (id, name, amount, fat, protein, carbs, userId) => {
  console.log(id);
  console.log(userId);
  const result = await knex('user_food')
      .where('id', id).andWhere('userId', userId)
      .update({name, amount, fat, protein, carbs}).returning('*');

  await delAsync(id);

  return result;
};

const deleteUserFood =
 async (id, userId) => {
   const result = await knex('user_food')
       .where('id', id).andWhere('userId', userId)
       .del();

   await delAsync(id);

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
  updateUserFood,
  deleteUserFood,
};
