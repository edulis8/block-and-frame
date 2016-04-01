const bookshelf = require('../config/bookshelf');

const Event = bookshelf.Model.extend({
  tableName: 'events',
  hasTimestamps: true,
  // Defines related users
  users() {
    // Require at runtime to avoid errors
    const User = require('../users/userModel').User;
    return this.belongsToMany(User).withPivot(['is_creator']);
  },
});

// Helper method to get and and associate user data
Event.fetchAndPopulate = function (id) {
  return this.where(id)
  .fetch({
    withRelated: [{ users(qb) {
      // Omitting password
      qb.column('email', 'username', 'bio', 'is_traveling', 'location');
    } }],
  });
};

module.exports = Event;
