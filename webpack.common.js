var common = {

  extensions: ['', '.jsx', '.js', '.jpg', '.styl'],

  loaders: [
    { test: /.*\.jsx$/, loaders: ['react-hot', 'jsx-loader?harmony'] },
    { test: /.*\.svg/, loader: 'url-loader?mimetype=image/svg+xml' },
    { test: /.*\.jpg$/, loader: 'url-loader?mimetype=image/jpg' },
    { test: /.*\.png$/, loader: 'url-loader?mimetype=image/png' }
  ]

};

module.exports = common;
