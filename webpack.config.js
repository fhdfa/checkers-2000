var path = require('path');
var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
        test: /\.jsx?$/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['env', 'react'],
        }
      }
    ]
  },
  output: {
    filename: 'dist/bundle.js'
  },
  entry: [
    './src/index.jsx'
  ]
};
