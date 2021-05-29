const path = require('path');

module.exports = {
  entry: [],
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },
};