const {insertFood} = require('./../queries');

const createFood = async (req, res) => {
  const name = req.body.name;
  const fat = req.body.fat;
  const protein = req.body.protein;
  const carbs = req.body.carbs;

  try {
    const food = await insertFood(name, fat, protein, carbs);
    res.status(200).json(food);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  createFood,
};
