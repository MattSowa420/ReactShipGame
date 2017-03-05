var path = require('path');
var webpack = require("webpack");

module.exports = {
  devtool: '#inline-source-map',
  watch: true,

  entry: {
  	javascript: './src/app.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
    	test: /\.html$/,
    	loader: "file-loader?name=[name].[ext]",
  	  }
    ]
  },
  devServer: {
    host: '0.0.0.0'
  }
};