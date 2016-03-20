const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');

const routes = require('../routes.js');
const authRoutes = require('../auth/authRoutes');

const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');
const compiler = webpack(webpackConfig);

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
});

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

module.exports = (app, express) => {
  // Silence for testing
  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
  }

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(passport.initialize());
  require('./passport')(passport);

  app.use(webpackDevMiddleware);
  app.use(webpackHotMiddleware);

  app.use('/dist', express.static(path.join(__dirname, '/../../dist')));

  app.use('/auth', authRoutes);
  app.use('/api', passport.authenticate('jwt', { session: false }), routes);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });
};
