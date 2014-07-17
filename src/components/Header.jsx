/** @jsx React.DOM */
'use strict';

var React = require('react');

var SpeakerList = require('./speaker.jsx');
var Logistics = require('./logistics.jsx');

var Header = React.createClass({
  render: function () {
    return (
      <header className="masthead">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <img className="brand" src={require('../../public/images/logo.svg')} alt="NYC HTML5"/>
            </div>
            <div className="col-md-10">
              <div className="page-header">
                <h3 className="heading">{"{ Next Event }"}</h3>
                <h2>
                  <a href={this.props.meetup.url}>{this.props.meetup.title}</a>
                </h2>
              </div>
            </div>
          </div>

          <hr/>

          <div className="row">
            <SpeakerList className="col-md-6" speakers={this.props.meetup.speakers}/>
            <Logistics date={this.props.meetup.date} />
          </div>
        </div>
      </header>
    );
  }
});

module.exports = Header;

