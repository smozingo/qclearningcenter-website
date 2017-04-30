const path = require('path');

module.exports = {
  entry: [
    './src/client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../dist/assets'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};
