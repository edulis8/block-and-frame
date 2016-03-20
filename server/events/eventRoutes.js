const express = require('express');
const eventController = require('./eventController');

const router = express.Router();

router.get('/', eventController.getAllEvents);
router.get('/:eventId', eventController.getEventbyId);
router.post('/:userId', eventController.createEvent);
router.put('/:eventId', eventController.editEvent);
router.delete('/:eventId', eventController.deleteEvent);

module.exports = router;
