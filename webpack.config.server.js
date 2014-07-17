var common = require('./webpack.common');

module.exports = {
  name: 'server side rendering',
  entry: './src/html.js',
  target: 'node',
  output: {
    path: __dirname + '/lib',
    filename: 'html.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: common.extensions
  },
  module: {
    loaders: common.loaders.concat([
      { test: /.*\.styl$/, loader: 'raw-loader!css-loader!stylus-loader' },
    ])
  }
};
