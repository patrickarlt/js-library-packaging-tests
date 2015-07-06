var path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /dependency[\///].*\.js$/, loader: 'babel-loader' }
    ]
  }
}
