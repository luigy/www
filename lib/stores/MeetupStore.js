var Fluxxor = require('fluxxor');
/* var fs = require('fs'); */
/* var R = require('ramda'); */

var meetups = require('../../speakers/index');

/* var toLowerCase = R.func('toLowerCase');
var stripWhiteSpace = R.func('replace');
var filename = R.compose(toLowerCase, stripWhiteSpace); */

/* var req = function(fname) { */
/* if (fs.existsSync('../../public/images/spekaers/' + fname + '.jpg')) { */
/* return require('../../public/images/speakers/' + fname + '.jpg'); */
/* } */
/* } */

/* var imageExists = R.filter(fs.existsSync); */

/* var speakers = R.map(R.prop('speakers')); */
/* var sortByDate = R.sortBy(R.prop('date')); */


/* console.log(imageExists(sortByDate(meetups))); */


var MeetupStore = Fluxxor.createStore({

  initialize: function() {
    this.meetups = meetups.map(function(m) {
      m.speakers = m.speakers.map(function(s) {
        var fname = s.name.trim().toLowerCase().replace(/\s/, '');
        try {
          s.image = require('../../public/images/speakers/' + fname + '.jpg');
        } catch(e) {}
        return s;
      });
      return m;
    }).sort(function(a, b) {
      return a.date < b.date;
    });
  }

});

module.exports = MeetupStore;

