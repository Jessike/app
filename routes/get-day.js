const {searchFoodByDate} = require('./../queries');

const getFoodByDate = async (req, res) => {
  const date = req.params.date;

  try {
    const food = await searchFoodByDate(date);
    res.status(200).json(food);
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  getFoodByDate,
};
