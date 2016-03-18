const bookshelf = require('../config/bookshelf');
const Event = require('./eventModel');

const Events = new bookshelf.Collection();

Events.model = Event;

module.exports = Events;
