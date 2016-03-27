const express = require('express');
const authController = require('./authController');

const passport = require('passport');

const router = express.Router();

router.post('/signin', authController.signin);
router.post('/signup', authController.signup);
// this has to do with the instagram session:
router.get('/logout', authController.logout);

// My try:
router.get('/instagram',
  passport.authorize('instagram'),
  (req, res) => {
    // The request will be redirected to Instagram for authentication, so this
    // function will not be called.
  });

router.get('/instagram/callback', 
  passport.authorize('instagram', {
    scope: ['public_content'],
    failureRedirect: '/editprofile' }),
  authController.instagramLogin);




module.exports = router;
