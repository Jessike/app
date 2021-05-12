const {foodForUser} = require('./../queries');

const userMacros = async (req, res) => {
  const {name, fat, protein, carbs} = req.body;

  try {
    const food = await foodForUser({name, fat,
      protein, carbs}, 0, req.user.id);
    res.status(200).json(food);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  userMacros,
};
