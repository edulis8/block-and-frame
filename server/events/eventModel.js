var bookshelf = require('../config/bookshelf');

var Event = bookshelf.Model.extend({
  tableName: 'events',
  hasTimestamps: true,
  users: function () {
    var User = require('../users/userModel');
    return this.belongsToMany(User).withPivot(['is_creator']);
  },
});

Event.fetchAndPopulate = function (id) {
  return this.where(id)
  .fetch({
    withRelated: [{'users': function (qb){
      // omit password
      qb.column('email', 'username', 'bio', 'city', 'country');
    }}],
  });
};

module.exports = Event;
