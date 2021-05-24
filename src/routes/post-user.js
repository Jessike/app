const {createUse} = require('./../model/user-model');
const {hashPassword} = require('./../utils/hashing');

const createUser = async (req, res) => {
  const hash = await hashPassword(req.body.password);
  const email = req.body.email;
  try {
    const person = await createUse(email, hash);
    res.status(200).json(person);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = {
  createUser,
};
