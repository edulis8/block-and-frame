const express = require('express');
const eventRoutes = require('./events/eventRoutes');
const userRoutes = require('./users/userRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/events', eventRoutes);

module.exports = router;
