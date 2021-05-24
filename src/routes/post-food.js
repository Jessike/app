const {insertFood} = require('./../model/food-model');

const createFood = async (req, res) => {
  const name = req.body.name;
  const fat = req.body.fat;
  const protein = req.body.protein;
  const carbs = req.body.carbs;
  console.log(name);
  try {
    const food = await insertFood(name, fat, protein, carbs);
    console.log(food);
    res.status(200).json(food);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = {
  createFood,
};
