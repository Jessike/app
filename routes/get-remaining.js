const {searchFoodByDate, getGoal} = require('../queries');
const calories = require('../utils/food-stats');

const getCals = async (req, res) => {
  const date = req.params.date;
  try {
    const food = await searchFoodByDate(date);
    const goal = await getGoal(req.user.id);
    const remainingCal = stats(food, goal);
    res.status(200).json({'remainingCals': remainingCal});
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const stats = (food, goal) => {
  let foodFat = 0;
  let foodProt = 0;
  let foodCarb = 0;

  for (let i = 0; i < food.length; i++) {
    foodFat += food[i].fat;
    foodProt += food[i].protein;
    foodCarb += food[i].carbs;
  };

  const foodkCal = calories(foodFat, foodProt, foodCarb);
  const goalkCal = calories(goal[0].fat, goal[0].protein, goal[0].carbs);

  return goalkCal - foodkCal;
};

module.exports = {
  getCals,
};

