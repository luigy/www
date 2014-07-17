/** @jsx React.DOM */
var React = require('react');
var moment = require('moment');

var SpeakerList = require('./speaker.jsx');


var Meetup = React.createClass({
  render: function () {
    var m = this.props.meetup;
    //var cls = this.props.idx % 2 !== 0 ? 'timeline-inverted' : '';

    return (
      <li>
        <div className='timeline-badge'><i className='fa fa-calendar'></i></div>
        <div className='timeline-panel'>
          <div className='timeline-heading'>
            <h4 className='timeline-title'><a href={m.url}>{m.title}</a></h4>
            <p className='timeline-date'>
              <i className='fa fa-clock-o'/> {moment(m.date).format('MMM Do, YYYY')}
            </p>
          </div>
          <div className='timeline-body'>
            <SpeakerList speakers={m.speakers} />
          </div>
        </div>
      </li>
    );
  }
});

module.exports = Meetup;
