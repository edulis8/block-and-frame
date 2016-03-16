var bookshelf = require('../config/bookshelf');

var User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  events: function () {
    var Event = require('../events/eventModel');
    return this.belongsToMany(Event).withPivot(['is_creator']);
  },
});

module.exports = User;

// console.log(User);
// new User({
//   username: 'testname',
// })
// .save()
// .then(function(user) {
//   console.log('user created', user);
// });