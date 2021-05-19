const {getUser} = require('./../queries');
const {comparePassword} = require('./../hashing');

const login = async (req, res) => {
  const user = await getUser(req.body.email);

  if (!user) {
    res.status(404).send('not valid');
  } else {
    if (await comparePassword(req.body.password, user.hash)) {
      // sets a cookie with the user's info
      req.session.user = user;
      req.user = user;
      delete req.user.hash;

      res.status(200).send();
    } else {
      res.status(404).send('not the right pssword');
    }
  }
};


module.exports = {
  login,
};
