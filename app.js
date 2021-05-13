const express = require('express');
const routes = require('./router');
const app = express();
const port = 3000;
const {expressLogger, logger} = require('./logger');


app.use(expressLogger);
app.use('/api/v1', routes);

app.listen(port, () => {
  logger.info('Server running on port %d', port);
});

module.exports = app;
