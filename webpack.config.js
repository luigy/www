var common = require('./webpack.common');

module.exports = {
  name: 'browser dev',
  entry: ['webpack/hot/dev-server', './src/components/entry.jsx'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
    chunkFilename: '[id].js'
  },
  resolve: {
    extensions: common.extensions
  },
  module: {
    loaders: common.loaders.concat([
      { test: /.*\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
    ])
  },
  devtool: 'source-map',
  console: true
};
