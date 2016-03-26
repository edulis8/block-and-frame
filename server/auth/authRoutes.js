const express = require('express');
const authController = require('./authController');

const passport = require('passport');

const router = express.Router();

router.post('/signin', authController.signin);
router.post('/signup', authController.signup);
//
router.get('/signin', function(req,res){
  console.log('yoooohooo')
})
router.get('/logout', function(req, res){
  console.log('Logging out!')
  req.logout();
  res.send('logging you out!');
});

// Docs:
// app.get('/auth/instagram',
//   passport.authenticate('instagram'));

// app.get('/auth/instagram',
//   passport.authenticate('instagram'),
//   function(req, res){
//     // The request will be redirected to Instagram for authentication, so this
//     // function will not be called.
//   });

// My try:
router.get('/instagram',
  passport.authenticate('instagram'),
  function(req, res) {
    // The request will be redirected to Instagram for authentication, so this
    // function will not be called.
    console.log('Is this function called???');
  });
  

// Docs:
// app.get('/auth/instagram/callback', 
//   passport.authenticate('instagram', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

router.get('/instagram/callback', 
  passport.authenticate('instagram', { failureRedirect: '/signin' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log('Successful AUTHENTICATION!!!, redirect home.')
    res.redirect('/events')
  });

// Docs:
// app.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/');
// });

module.exports = router;
