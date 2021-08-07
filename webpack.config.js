const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    homepage: "./src/js/homepage.js",
    photographerPage: "./src/js/photographer-page.js"
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "[name].bundle.js",
  },
};