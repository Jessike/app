const {createUse} = require('./../model/user-model');
const {hashPassword} = require('./../utils/hashing');

const createUser = async (req, res) => {
  console.log(req.body);
  const hash = await hashPassword(req.body.password);
  const email = req.body.email;
  const name = req.body.name;

  try {
    const person = await createUse(name, email, hash);
    res.status(200).json(person);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = {
  createUser,
};
