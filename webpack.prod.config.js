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

  resolve: {
    modulesDirectories: ["src", "node_modules", "src/libs", "src/styles", "node_modules/tachyons/css"]
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?optional[]=runtime'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'style', 
        'css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss'
      )
    }]
  },

  postcss: function() {
    return [require('precss')]
  }
}
