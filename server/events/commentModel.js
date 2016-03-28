const bookshelf = require('../config/bookshelf');
const Event = require('./eventModel');

const Comment = bookshelf.Model.extend({
  tableName: 'comments',
  events() {
    return this.belongsToOne(Event);
  },
});

module.exports = Comment;
