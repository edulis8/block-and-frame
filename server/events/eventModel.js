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
      // NOTE Omiting password
      qb.column('email', 'username', 'bio', 'is_traveling', 'location');
    } }],
  });
};

module.exports = Event;
