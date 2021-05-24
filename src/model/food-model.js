const knex = require('../knex');
const {getAsync, setAsync} = require('../cache');


const insertFood = async (name, fat, protein, carbs) => {
  const result = await knex('food')
      .insert({name, fat, protein, carbs}).returning('*');
  return result;
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

const searchFoodByName = async (name) => {
  const result = await knex('food').where('name', name);
  return result[0];
};

module.exports = {
  insertFood,
  searchFoodById,
  getFoods,
  searchFoodByName,
};
