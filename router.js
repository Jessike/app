const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const bodyParser = require('body-parser');
const {createUser} = require('./routes/post-user');
const {createFood} = require('./routes/post-food');
const {createGoal} = require('./routes/post-goal');
const session = require('express-session');
const {login} = require('./routes/login');
const {logout} = require('./routes/logout');
const {getFood} = require('./routes/get-food');
const {searchFood} = require('./routes/search-food'); 1;
const {userFood} = require('./routes/post-userfood');
const {userMacros} = require('./routes/post-userMacros');
const {getFoodByDate} = require('./routes/get-day');
const {getCals} = require('./routes/get-remaining');

const {isUserAuthenticated} = require('./middleware/session-middleware');
const {requireLogin} = require('./middleware/require-login');

router.use(bodyParser.json());
router.use(
    bodyParser.urlencoded({
      extended: true,
    }),
);

router.use(session({
  cookieName: 'session',
  secret: 'random_string',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));


router.post('/users', createUser);
router.post('/food', createFood);
router.post('/login', login);
router.get('/food/:id', getFood);
router.get('/food/search/:keyword', searchFood);


router.use(isUserAuthenticated);
router.use(requireLogin);

router.post('/goal', createGoal);
router.get('/logout', logout);
router.post('/user/food', userFood);
router.post('/user/macros', userMacros);
router.get('/user/day/:date', getFoodByDate);
router.get('/user/goal/:date', getCals);

module.exports = router;
