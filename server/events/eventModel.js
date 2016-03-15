var bookshelf = require('../config/bookshelf');

var Event = bookshelf.Model.extend({
  tableName: 'events',
  hasTimestamps: true,
  users: function () {
    var User = require('../users/userModel');
    return this.belongsToMany(User);
  },
});

module.exports = Event;

//console.log(Event)
// new Event({
//   name: 'test',
// })
// .save()
// .then(function(event) {
//   console.log('event created', event);
// });


// e.g. api/events/:eventName/:userId

// get event with name and associate it to user with userId
//add user to event join table
// new Event({
//   name: 'test',
// })
// .fetch()
// .then(function(event) {
//   console.log('found event', event);
//   return event.users().attach([1]);
// });
//                              ^userId