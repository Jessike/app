const {createUse} = require('./../queries');
const {hashPassword} = require('./../hashing');

const createUser = async (req, res) => {
     const hash = await hashPassword(req.body.password)
     const email = req.body.email;
     try {
        const person = await createUse(email, hash);
        res.status(200).json(person);
      } catch (error) {
        res.status(500).send();
      } 
};

module.exports = {
    createUser
};