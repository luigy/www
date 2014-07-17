/** @jsx React.DOM */
var React = require('react');
var StoreWatchMixin = require('fluxxor').StoreWatchMixin;

var Header = require('./header.jsx');
var Timeline = require('./timeline.jsx');

var App = React.createClass({

  mixins: [StoreWatchMixin('MeetupStore')],

  getStateFromFlux: function() {
    var store = this.props.flux.store('MeetupStore');
    return {
      meetups: store.meetups
    };
  },

  render: function() {
    //var upcoming = this.props.meetups.findNext(new Date());
    var upcoming = this.state.meetups[0];
    return (
      <div>
        <div className='container' id="social">
          <div className='pull-right'>
            <a href='https://twitter.com/nychtml5'><i className='fa fa-2x fa-twitter-square'></i></a>&nbsp;
            <a href='https://github.com/nychtml5/www'><i className='fa fa-2x fa-github-square'></i></a>&nbsp;
            <a href="irc://irc.freenode.net/#nychtml5">irc: <strong>#nychtml5</strong></a>
          </div>
        </div>
        <Header meetup={upcoming} />
        <div className="container">
          <div className="row">
            <div className="well-sm sponsored">
              Space and Food provided by:
              <br/>
              <img src="/images/cn-125.png" alt="conde nast" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="no-gutter row">
            <div className="col-md-12" id="content">
              <Timeline meetups={this.state.meetups}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = App;
