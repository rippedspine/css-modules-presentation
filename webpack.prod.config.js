var path = require('path')
var webpack = require('webpack')

// Plugins
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'source-maps',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new ExtractTextPlugin('app.css', {
      allChunks: true
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?optional[]=runtime'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', [
        'css-loader?modules',
        'importLoaders=1',
        'localIdentName=[name]_[local]_[hash:base64:5]'
      ].join('&'))
    }]
  }
}
