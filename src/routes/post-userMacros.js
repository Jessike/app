const {foodForUser} = require('./../model/userfood-model');

const userMacros = async (req, res) => {
  const {name, fat, protein, carbs} = req.body;
  console.log(req.body + 'y');
  try {
    const food = await foodForUser({name, fat,
      protein, carbs}, 0, req.user.id);
    console.log(food + 'yo');
    res.status(200).json(food);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  userMacros,
};
