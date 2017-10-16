const webpack = require('webpack')

module.exports = {
  entry: ['babel-polyfill', './main.js'],
  output: {
    filename: './bundle.js'
  },
  // watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
