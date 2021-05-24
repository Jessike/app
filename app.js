const express = require('express');
const routes = require('./src/router');
const app = express();
const port = 3000;
const {expressLogger, logger} = require('./src/utils/logger');


app.use(expressLogger);
app.use('/api/v1', routes);

app.listen(port, () => {
  logger.info('Server running on port %d', port);
});

module.exports = app;
