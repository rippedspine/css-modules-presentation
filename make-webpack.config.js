var path = require('path')
var webpack = require('webpack')

// Plugins
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function(options) {
  var debug = options.debug || false;
  var devtool = options.devtool || 'source-maps';
  var plugins = [];

  var entry = ['./src/index'];

  var output = {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  };

  var modulesDirectories = ['src', 'src/styles', 'node_modules'];
  var extensions = ['', '.js', '.css', '.scss', '.md'];

  var localIdentName = options.build ? '[hash:base64:5]' : '[name]_[local]_[hash:base64:5]';
  var cssLoader = 'css?modules&importLoaders=1&localIdentName=' + localIdentName + '!postcss';

  var jsLoaders = ['babel?optional[]=runtime'];

  if (options.build) {
    cssLoader = ExtractTextPlugin.extract(cssLoader);
    plugins.push(new ExtractTextPlugin('[name].css', { allChunks: true }));
  }

  if (options.hotComponents) {
    jsLoaders.unshift('react-hot');
    cssLoader = 'style!' + cssLoader;
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  if (options.devServer) {
    entry = entry.concat([
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
    ]);
  }

  var loaders = [{
    test: /\.md$/,
    loaders: ['html', 'markdown']
  }, {
    test: /\.js$/,
    loaders: jsLoaders,
    include: path.join(__dirname, 'src')
  }, {
    test: /\.css$/,
    loader: cssLoader
  }];

  return {
    devtool: devtool,
    debug: debug,
    entry: entry,
    output: output,
    plugins: plugins.concat(options.plugins || []),
    resolve: { 
      extensions: extensions,
      modulesDirectories: modulesDirectories 
    },
    module: { loaders: loaders },
    postcss: function() {
      return [require('precss'), require('autoprefixer')]
    }
  };
};