const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};


const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app,
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: PATHS.app,
      },
    ],
  },

  plugins: [
    HTMLWebpackPluginConfig,

    // detects changes made to webpack config and automatically installs dependencies
    new NpmInstallPlugin({
      save: true,
    }),
  ],
};
