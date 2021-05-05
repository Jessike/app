const {insertGoal} = require('./../queries');

const createGoal = async (req, res) => {
   
    const fat = req.body.fat;
    const protein = req.body.protein;
    const carbs = req.body.carbs;
     
     try {
        const goal = await insertGoal(fat, protein, carbs);
        res.status(200).json(goal);
      } catch (error) {
        res.status(500).send();
      } 
};

module.exports = {
    createGoal
};