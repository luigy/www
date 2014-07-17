/** @jsx React.DOM */
var React = require('react')
var App = require('./app.jsx');


/**
 * styles
 */

var bootplyStyle = require('../styl/bootply.styl');
var mainStyle = require('../styl/main.styl');

var flux = require('../../lib/flux');

React.renderComponent(
  App({ flux }),
  document.getElementById('app')
);
