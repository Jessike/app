const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const {getUser} = require('./../model/user-model');
const {comparePassword} = require('./../utils/hashing');


const login = async (req, res) => {
  console.log(req.body);
  const user = await getUser(req.body.email);
console.log(user);
  if (!user) {
    res.status(404).send('not valid');
  } else {
    if (await comparePassword(req.body.password, user.hash)) {

      const payload = {
        id: user.id,
        name: user.name
      };

      // Sign token
      jwt.sign(
        payload,
        keys.secretOrKey,
        {
          expiresIn: 31556926 // 1 year in seconds
        },
        (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        }
      );

    } else {
      res.status(404).send('not the right password');
    }
  }
};


module.exports = {
  login,
};
