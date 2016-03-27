const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');

const routes = require('../routes.js');
const authRoutes = require('../auth/authRoutes');
const publicPath = path.resolve(__dirname, '/dist');

const isDeveloping = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');
const compiler = webpack(webpackConfig);
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
  quiet: true,
});

module.exports = (app, express) => {
  // Silence for testing
  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
  }

  // testing S3
  require('./s3');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(passport.initialize());
  require('./passport')(passport);

// Passport session setup. (For instagram auth)
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Instagram profile is
//   serialized and deserialized.
  passport.serializeUser((user, done) => {
    console.log('serializeUser', user)
    done(null, users);
  });

  passport.deserializeUser((obj, done) => {
    console.log('deserializeUser', obj)
    done(null, obj);
  });

//end passport stuff ^^////////////////////

  app.use('/auth', authRoutes);
  app.use('/api', /* passport.authenticate('jwt', { session: false }), */ routes);

  if (isDeveloping) {
    app.use(webpackDevMiddleware);
    app.use(webpackHotMiddleware);
  } else {
    app.use('/dist', express.static(publicPath));
  }
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });
};
