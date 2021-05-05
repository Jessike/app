const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000;
const {createUser} = require('./routes/post-user');
const {createFood} = require('./routes/post-food');
const {createGoal} = require('./routes/post-goal');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post('/users', createUser);
app.post('/food', createFood);
app.post('/goal', createGoal);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })