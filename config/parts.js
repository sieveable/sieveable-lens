/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// Taken from http://survivejs.com/webpack/building-with-webpack
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');

exports.devServer = function (options) {
  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: options.host, // Defaults to `localhost`
      port: options.port // Defaults to 8080
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multiStep: true,
      })
    ]
  };
};

exports.transpile = function (paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel'],
          include: paths
        }
      ]
    }
  };
};

// Inline CSS (for development only)
exports.setupCSS = function (paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: paths
        }
      ]
    }
  };
};

exports.purifyCSS = function (cssPaths) {
  return {
    plugins: [
      new PurifyCSSPlugin({
        basePath: process.cwd(),
        paths: cssPaths
      }),
    ]
  };
};

// Code minification
exports.minify = function () {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: true
        },
        mangle: {
          except: ['$']
        }
      })
    ]
  };
};

// Set global variables. Useful for the final production build
exports.setGlobalVariable = function (key, value) {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  };
};

exports.extractBundle = function (options) {
  const entryObj = {};
  entryObj[options.name] = options.entries;

  return {
    // Define an entry point needed for splitting.
    entry: entryObj,
    plugins: [
      // Extract bundle and manifest files. Manifest is
      // needed for reliable caching.
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest']
      })
    ]
  };
};
// generate a separate CSS bundle (for production only)
exports.extractCSS = function (paths) {
  return {
    module: {
      loaders: [
        // Extract CSS during build
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css'),
          include: paths
        }
      ]
    },
    plugins: [
      // Output extracted CSS to a file
      new ExtractTextPlugin('[name].[chunkhash].css')
    ]
  };
};

// clean the build/dist directory between production builds
exports.clean = function (path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        root: process.cwd()
      })
    ]
  };
};

exports.lintPreloader = function (path) {
  return {
    test: /\.jsx?$/,
    loaders: ['eslint'],
    include: path
  };
};
