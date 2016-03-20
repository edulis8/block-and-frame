const bookshelf = require('../config/bookshelf');
const User = require('./userModel');

const Users = new bookshelf.Collection();

Users.model = User;

module.exports = Users;
