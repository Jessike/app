const {searchFoodById} = require('./../queries');
const {logger} = require('./../logger');
const getFood = async (req, res) => {
  const id = req.params.id;

  try {
    const food = await searchFoodById(id);
    if (!food) {
      throw new Error('nothing in the database');
    }
    res.status(200).json(food);
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  getFood,
};
