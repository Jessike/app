const knex = require('../knex');
const {delAsync} = require('../cache');

const foodForUser = async ({fat, protein, carbs, name}, amount, userId) => {
  const result = await knex('user_food')
      .insert({name, amount, userId, fat, protein, carbs}).returning('*');
  return result;
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
  foodForUser,
  searchFoodByDate,
  updateUserFood,
  deleteUserFood,
};
