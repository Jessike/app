const {foodForUser} = require('./../model/userfood-model');
const {searchFoodByName} = require('./../model/food-model');

const userFood = async (req, res) => {
  const {name, amount} = req.body;
  try {
    const food = await searchFoodByName(name);
    const userfood = await foodForUser(food, amount, req.user.id);
    res.status(200).json(userfood);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = {
  userFood,
};
