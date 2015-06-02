/*eslint-env node */
const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');
const OUTPUT_DIR = path.join(__dirname, 'dist');

module.exports = {
  devtool: 'source-map',
  entry: path.join(SRC_DIR, 'app.js'),
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
      }
    ]
  }
};
