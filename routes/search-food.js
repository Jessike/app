const {getFoods} = require('./../queries');

const searchFood = async (req, res) => {
  const name = req.params.keyword;
  try {
    const food = await getFoods(name);
    if (food.length === 0) {
      res.status(500).send('nothing found');
    } else {
      res.status(200).json(food);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = {
  searchFood,
};
