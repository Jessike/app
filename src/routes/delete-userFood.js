const {deleteUserFood} = require('./../model/userfood-model');

const deleteFood = async (req, res) => {
  const id = req.params.id;
  const userId = req.user.id;

  try {
    const food = await deleteUserFood(id, userId);
    console.log(food);
    res.status(200).json(food);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};


module.exports ={deleteFood};
