/** @jsx React.DOM */
var React = require('react');
var PropTypes = React.PropTypes;


var SpeakerList = React.createClass({

  getDefaultProps: function() {
    return {
      speakers: []
    };
  },

  render: function() {
    var speakers = this.props.speakers.map(
      s => <Speaker key={s.name}
                    name={s.name}
                    title={s.title}
                    desc={s.desc}
                    img={s.image}
                    twitter={s.twitter}
                    url={s.url}
                    />
    );
    return (
      <div className={this.props.className}>
        {speakers}
      </div>
    );
  }

});

module.exports = SpeakerList;

var Speaker = React.createClass({

  propTypes: {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string
  },

  getDefaultProps: function() {
    return {
      img: 'http://placekitten.com/150/150'
    }
  },

  render: function() {
    var handle = this.props.twitter;
    var url = handle ? `https://twitter.com/${handle}` : this.props.url;

    return (
      <div className="media speaker">
        <a className="pull-left speaker-photo" href={url || '#'}>
          <img className="media-object" src={this.props.img} alt={this.props.name} />
        </a>
        <div className="media-body">
          <h4 className="media-heading">
            {this.props.title}
          </h4>
          <a href={url}>{this.props.name}</a>
          <br />
          {this.props.desc}
        </div>
      </div>
    );
  }
});
