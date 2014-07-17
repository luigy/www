/** @jsx @React.DOM */
var React = require('react');
var flux = require('../lib/flux');
var App = require('./components/app.jsx');

var css = require('./styl/bootply.styl') + require('./styl/main.styl');

module.exports = [
  '<html lang="en">',
  '<head>',
  '  <meta charSet="utf-8">',
  '  <title>NYC HTML5</title>',
  '  <meta name="generator" content="Bootply" >',
  '  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">',
  '  <meta http-equiv="X-UA-Compatible" content="IE=edge">',
  '  <meta name="author" content="Trevor Landau">',
  '  <meta name="description" content="NYC HTML5">',
  '  <meta name="robots" content="index, follow">',

  '  <link rel="shortcut icon" type="image/png" href="/images/favicon.png">',

  '  <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">',
  '  <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">',
  '  <link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet">',

  '  <!-- common social tags -->',
  '  <meta property="og:type" content="website">',
  '  <meta property="og:image" content="/images/logo.png">',
  '  <meta property="og:site_name" content="NYC HTML5">',
  '  <meta name="twitter:card" content="summary">',
  '  <meta name="twitter:image" content="http://www.nychtml5.com/images/logo.png">',
  '  <meta name="twitter:site" content="@nychtml5">',
  '  <meta name="twitter:creator" content="@nychtml5">',
  '  <style type="text/css">',
       css,
  '  </style>',
  '</head>',
  '<body>',
  '</body>',

  '  <div id="app">',
       React.renderComponentToString(App({ flux: flux })),
  '  </div>',

  '  <script src="/bundle.js"></script>',

  '</html>'
].join('\n');
