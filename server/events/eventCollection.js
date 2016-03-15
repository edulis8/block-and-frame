var bookshelf = require('../config/bookshelf');
var Event = require('./eventModel');

var Events = new bookshelf.Collection();

Events.model = Event;

module.exports = Events;