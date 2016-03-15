var bookshelf = require('../config/bookshelf');
var User = require('./userModel');

var Users = new bookshelf.Collection();

Users.model = User;

module.exports = Users;