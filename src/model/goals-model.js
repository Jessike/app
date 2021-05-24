const knex = require('../knex');

const insertGoal = async (fat, protein, carbs, userId) => {
  const result = await knex('goals')
      .insert({fat, protein, carbs, userId}).returning('*');
  return result;
};

const getGoal = async (userId) => {
  const result = knex('goals').where('userId', userId);
  return result;
};

module.exports = {
  insertGoal,
  getGoal,
};
