/** @jsx React.DOM */
'use strict';

var React = require('react');
var createClass = React.createClass;

var Speaker = exports.Speaker = createClass({
  render() {
    var speaker = this.props.speaker;
    var twitter = speaker.twitter;
    var url = twitter ? `https://twitter.com/${twitter}` : (speaker.url || '#');
    var img = speaker.image ? `/images/speakers/${speaker.image}` : 'http://placekitten.com/150/150';

    return (
      <div className="media speaker">
        <a className="pull-left speaker-photo" href={url}>
        <img className="media-object" src={img} alt={speaker.name} />
        </a>

        <div className="media-body">
          <h4 className="media-heading">
            {speaker.title} 
          </h4>
          <a href={url}>{speaker.name}</a>
          <br />
          {speaker.desc}
        </div>
      </div>
    );
  }
});

exports.SpeakerList = createClass({
  render() {
    return (
      <div className={this.props.className}>
        {(this.props.speakers || []).map(s => <Speaker key={s.name} speaker={s} />)}
      </div>
    );
  }
});
