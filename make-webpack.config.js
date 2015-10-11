var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function(options) {
  var debug = options.debug || false;
  var devtool = options.devtool || 'source-maps';
  var plugins = options.plugins || [];

  var entry = ['./src/index'];

  var output = {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  };

  var modulesDirectories = ['src', 'src/libs', 'src/styles', 'node_modules'];

  var localIdent = options.build ? '[hash:base64:5]' : '[name]_[local]_[hash:base64:5]';
  var scssLoader = 'css?modules&importLoaders=1&localIdent=' + localIdent + '!sass';

  var jsLoaders = ['babel?optional[]=runtime'];

  if (options.build) {
    scssLoader = ExtractTextPlugin.extract(scssLoader);
    plugins.push(new ExtractTextPlugin('[name].css', { allChunks: true }));
  }

  if (options.hotComponents) {
    jsLoaders.unshift('react-hot');
    scssLoader = 'style!' + scssLoader;
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
    test: /\.scss$/,
    loader: scssLoader
  }, {
    test: /\.html$/,
    loader: 'html'
  }];

  return {
    devtool: devtool,
    debug: debug,
    entry: entry,
    output: output,
    plugins: plugins,
    resolve: { modulesDirectories: modulesDirectories },
    module: { loaders: loaders }
  };
};