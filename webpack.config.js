/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const parts = require('./config/parts');

process.env.BABEL_ENV = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist'),
  style: [
    path.join(__dirname, 'src', 'styles', 'main.css')
  ]
};

const common = {
  entry: {
    style: PATHS.style,
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    preLoaders: [parts.lintPreloader(PATHS.app)]
  },
  resolve: {
    // '' is declared to allow import without extension, e.g., import from './Component';
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sieveable lens',
      template: '!!handlebars!src/index.hbs'
    })
  ]
};

let config;

// Detect how npm is run and branch based on that
switch (process.env.npm_lifecycle_event) {
  case 'build':
  case 'stats':
    config = merge(common,
      {
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          publicPath: '/sieveable-lens/',
          filename: '[name].[chunkhash].js',
          chunkFilename: '[chunkhash].js'
        }
      },
      parts.clean(PATHS.build),
      parts.setGlobalVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.extractBundle({
        name: 'vendor',
        entries: ['react']
      }),
      parts.transpile(PATHS.app),
      parts.minify(),
      parts.extractCSS(PATHS.style),
      parts.purifyCSS([PATHS.app])
    );
    break;
  default:
    config = merge(common,
      { devtool: 'eval-source-map' },
      parts.transpile(PATHS.app),
      parts.setupCSS(PATHS.style),
      parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
      }));
}

module.exports = validate(config, { quiet: true });
