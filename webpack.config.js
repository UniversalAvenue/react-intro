var webpack = require('webpack');
var path = require('path');

var files = {
  dest: 'build/',
  src: 'src/',
  bundleName: 'bundle.js'

};

var settings = {
  entry: {
    app: path.join(__dirname, files.src),
  },
  output: {
    path: path.join(__dirname, files.dest),
    filename: files.bundleName,
  },
  plugins: [
		new webpack.DefinePlugin({
      "process.env": {
        'API_BASE_PATH': JSON.stringify(process.env.API_BASE_PATH),
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
	],
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};

module.exports = settings;
