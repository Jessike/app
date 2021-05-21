const {updateUserFood} = require('../queries');

const updateFood = async (req, res) => {
  const id = req.params.id;
  const {name, amount, fat, protein, carbs} = req.body;
  console.log(name);
  try {
    const update =
    await updateUserFood(id, name, amount, fat, protein, carbs, req.user.id);
    console.log(update);
    res.status(200).json(update);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = {
  updateFood,
};
