var path = require('path');

module.exports = {
  entry: {
  	javascript: './src/app.js'
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
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
  }
}