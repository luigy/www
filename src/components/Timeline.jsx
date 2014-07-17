/** @jsx React.DOM */
var React = require('react');

var Meetup = require('./meetup.jsx');


var Timeline = React.createClass({
  render: function () {
    return (
      <ul className='timeline'>
        <li><h3 className='timeline-header'>Previous Events</h3></li>
        {this.props.meetups.map(function(m, i) {
          return <Meetup key={m.date} idx={i} meetup={m} />
        })}
      </ul>
    );
  }
});

module.exports = Timeline;

