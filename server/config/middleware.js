const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');
const compiler = webpack(webpackConfig);

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
  historyApiFallback: true,
});

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
});

module.exports = (app, express) => {
  const userRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(webpackDevMiddleware);
  app.use(webpackHotMiddleware);

  app.use(express.static(path.join(__dirname, '/../../dist')));

  app.use('/api/users', userRouter); // use user router for all user requests

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });


  // inject our routers into their respective route files
  require('../users/userRoutes.js')(userRouter);
};
