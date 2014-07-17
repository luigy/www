'use strict';

var express = require('express');
var path = require('path');
var is = require('is-predicate');

var app = module.exports = express();

/**
 * middleware
 */

var compress = require('compression');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('morgan');
var errorhandler = require('errorhandler');


app.set('port', process.env.PORT || 3000);

if (is.not.equal(app.get('env'), 'production')) {
  app.use(logger('dev'));
}

// caching
app.use(function (req, res, next) {
  res.header('Cache-Control', 'public, max-age=' + (60 * 60 * 24)); // cache for a day
  next();
});

app.use(compress());
app.use(favicon(path.join(__dirname, '..', 'public', 'images', 'favicon.png')));
app.use(bodyParser());
app.use(methodOverride());


require('./routes')(app);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(errorhandler());

// ALWAYS DEFINE LAST
app.use(function errHandler(err, req, res) {
  // TODO 500 page
  res.send(500);
});

