/*eslint-env node */
const path = require('path');
const postCSSNested = require('postcss-nested');

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
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  postcss: [ postCSSNested ]
};
