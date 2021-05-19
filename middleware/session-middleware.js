const {getUser} = require('./../queries');

const isUserAuthenticated = async (req, res, next) => {
  if (req.session && req.session.user) {
    const user = await getUser(req.session.user.email);
    if (user) {
      req.user = user;
      delete req.user.password; // delete the password from the session
      req.session.user = user; // refresh the session value
      res.locals.user = user;
    }
    // finishing processing the middleware and run the route
    next();
  } else {
    console.log('ohno');
    next();
  }
};


module.exports = {
  isUserAuthenticated,
};
