const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');
const compiler = webpack(webpackConfig);

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
});

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

module.exports = (app, express) => {
  const userRouter = express.Router();
  const eventRouter = express.Router();

  // Silence for testing
  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
  }

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(webpackDevMiddleware);
  app.use(webpackHotMiddleware);

  app.use('/dist', express.static(path.join(__dirname, '/../../dist')));

  app.use('/api/users', userRouter); // use user router for all user requests
  app.use('/api/events', eventRouter); // use user router for all user requests

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });


  // inject our routers into their respective route files
  require('../users/userRoutes.js')(userRouter);
  require('../events/eventRoutes.js')(eventRouter);
};
