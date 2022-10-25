global.__basedir = __dirname;
require('dotenv').config()
const dbConnector = require('./config/database');
const cors = require('cors');
const { errorHandler } = require('./utils/errHandler');
const apiRouter = require('./router');

dbConnector()
  .then(() => {
    const config = require('./config/config');

    const app = require('express')();
    require('./config/express')(app);

    app.use(cors({
      origin: config.origin,
      credentials: false
    }));

    app.use(apiRouter);

    app.use(errorHandler);

    app.listen(config.port, console.log(`Listening on port ${config.port}!`));
  })
  .catch(console.error);