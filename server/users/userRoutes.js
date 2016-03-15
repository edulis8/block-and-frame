var express = require('express');
var userController = require('./userController');


module.exports = function (router) {
  // router === userRouter injected from middlware.js
  router.get('/', userController.getAllUsers);
  router.get('/:userId', userController.getUserbyId);
  router.post('/', userController.createUser);
  router.put('/:userId', userController.editUser);
  router.delete('/:userId', userController.deleteUser);
};
