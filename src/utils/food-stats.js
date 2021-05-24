
const fatkCal = 9;
const protkCal = 4;
const carbkCal = 4;

const calories = (fat, protein, carbs) => {
  const fatCal = fat * fatkCal;
  const protCal = protein * protkCal;
  const carbCal = carbs * carbkCal;
  const totalCalories = fatCal + protCal + carbCal;
  return totalCalories;
};

module.exports = calories;
