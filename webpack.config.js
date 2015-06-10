/*eslint-env node */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_DIR = path.join(__dirname, 'src');
const OUTPUT_DIR = path.join(__dirname, 'dist');

module.exports = {
  devtool: 'source-map',
  entry: path.join(SRC_DIR, 'app.jsx'),
  output: {
    path: OUTPUT_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel?optional[]=runtime'
      },
      {
        test: /\.postcss$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
  postcss: [
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('autoprefixer-core')({ browsers: [ 'last 2 version' ] })
  ]
};
