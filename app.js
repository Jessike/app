const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000;
const {createUser} = require('./routes/post-user');
const {createFood} = require('./routes/post-food');


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post('/users', createUser);
app.post('/food', createFood);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })