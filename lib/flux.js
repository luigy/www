var Fluxxor = require('fluxxor');

/**
 * Flux
 */

var MeetupStore = require('./stores/MeetupStore');
var stores = {
  MeetupStore: new MeetupStore()
};
var actions = require('./actions');
var flux = new Fluxxor.Flux(stores, actions);

module.exports = flux;
