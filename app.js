const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000;
const {createUser} = require('./routes/post-user');
const {createFood} = require('./routes/post-food');
const {createGoal} = require('./routes/post-goal');
const session = require('express-session');
const {login} = require('./routes/login');
const {logout} = require('./routes/logout');

const { isUserAuthenticated } = require('./middleware/session-middleware');
const {requireLogin} = require('./middleware/require-login');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(session({
  cookieName: 'session',
  secret: 'random_string',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

app.post('/users', createUser);
app.post('/food', createFood);
app.post('/login', login);

app.use(isUserAuthenticated);
app.use(requireLogin);

app.post('/goal', createGoal);
app.get('/logout', logout);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })