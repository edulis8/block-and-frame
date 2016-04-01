const router = require('express').Router();
const eventRoutes = require('./events/eventRoutes');
const userRoutes = require('./users/userRoutes');
const instaRoutes = require('./insta/instaRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/insta', instaRoutes);

module.exports = router;
