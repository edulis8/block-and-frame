var express = require('express');
var eventController = require('./eventController');


module.exports = function (router) {
  // router === eventRouter injected from middlware.js
  router.get('/', eventController.getAllEvents);
  router.get('/:eventId', eventController.getEventbyId);
  router.post('/:userId', eventController.createEvent);
  router.put('/:eventId', eventController.editEvent);
  router.delete('/:eventId', eventController.deleteEvent);
};

