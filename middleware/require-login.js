const requireLogin = (req, res, next) => {
    
    if (!req.user) {
      res.status(400).send();
    } else {
      next();
    }
  };

  module.exports = {
    requireLogin
  };