const bookshelf = require('../config/bookshelf');

const Event = bookshelf.Model.extend({
  tableName: 'events',
  hasTimestamps: true,
  users() {
    const User = require('../users/userModel');
    return this.belongsToMany(User).withPivot(['is_creator']);
  },
});

Event.fetchAndPopulate = function (id) {
  return this.where(id)
  .fetch({
    withRelated: [{ users(qb) {
      // omit password
      qb.column('email', 'username', 'bio', 'city', 'country');
    } }],
  });
};

module.exports = Event;
