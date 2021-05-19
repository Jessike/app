const {logger} = require('../logger');

const requireLogin = (req, res, next) => {
  if (!req.user) {
    logger.error('User is not logged in');
    res.status(400).send();
  } else {
    next();
  }
};

module.exports = {
  requireLogin,
};
