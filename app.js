const path = require('path');
const express = require('express');
const cors = require('cors');
const routes = require('./src/router');
const app = express();
const port = 3002;
const {expressLogger, logger} = require('./src/utils/logger');

app.use(cors({
  origin: 'https://www.section.io'
}));
app.use(expressLogger);
app.use('/api/v1', routes);

app.use(express.static(path.resolve(__dirname, './client/build')));


app.listen(port, () => {
  logger.info('Server running on port %d', port);
});

module.exports = app;
