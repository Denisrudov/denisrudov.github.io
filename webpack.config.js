var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Unminified = require('unminified-webpack-plugin');
var webpack = require('webpack');

var extractSass = new ExtractTextPlugin('stylesheets/[name].css');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [

      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.s?css$/,
        loader: extractSass.extract('style', [ 'css?root=.', 'sass' ], {
          publicPath: '../'
        })
      },
      {
        test: /\.png|jpg|gif$/,
        loader: 'url?limit=10000&name=images/[name].[ext]'
      }

    ]
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unsafe: true,
        drop_console: false,
        warnings: false
      }
    })
  ]
};