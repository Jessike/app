const {searchFoodByDate} = require('./../queries');
const {logger} = require('./../logger');

const getFoodByDate = async (req, res) => {
  const date = req.params.date;
  const userId = req.user.id;
  try {
    const food = await searchFoodByDate(date, userId);
    res.status(200).json(food);
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  getFoodByDate,
};
