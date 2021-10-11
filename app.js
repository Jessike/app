const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const routes = require('./src/router');
const app = express();
const {expressLogger, logger} = require('./src/utils/logger');
require('dotenv').config();
require('./config/keys');

const port = process.env.PORT || 8080;

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));
// Passport middleware
app.use(passport.initialize());
// Passport config
require('./config/passport')(passport);
app.use(expressLogger);
app.use('/api/v1', routes);

app.use(express.static('client/build'));



app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


app.listen(port, () => {
  logger.info('Server running on port %d', port);
});

module.exports = app;
