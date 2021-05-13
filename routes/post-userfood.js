const {foodForUser, searchFoodByName} = require('./../queries');

const userFood = async (req, res) => {
  const {name, amount} = req.body;
  console.log(req.body);
  try {
    const food = await searchFoodByName(name);
    console.log(food);
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