const User = require('../users/userModel');
const jwt = require('jsonwebtoken');
const secret = require('../config/config').secret;

module.exports = {
  signin(req, res) {
    User.where({ email: req.body.email })
      .fetch().then((user) => {
        if (!user) {
          res.send({ success: false, message: 'Authentication failed. User not found.' });
        } else {
          // Check if password matches
          const isMatch = user.comparePassword(req.body.password, user.get('password'));
          if (isMatch) {
            // Create token if the password matched and no error was thrown
            const token = jwt.sign(user, secret, {
              expiresIn: 10080,
            });
            console.log('user', user);
            res.json({ success: true, token: `JWT ${token}`, id: user.get('id') });
          } else {
            res.send({ success: false, message: 'Error. Invalid password.' });
          }
        }
      });
  },

  signup(req, res) {
    const password = req.body.password;
    const email = req.body.email;

    new User({ email })
    .fetch()
    .then((user) => {
      if (user) {
        console.log('here');
        res.status(500).send('Error. User already exists.');
      }
      if (!user) {
        const newUser = new User({
          password,
          email,
        });
        newUser.save()
        .then((createdUser) => {
          const token = jwt.sign(user, secret, {
            expiresIn: 10080,
          });
          res.json({ success: true, token: `JWT ${token}`, id: createdUser.get('id') });
        })
        .catch((err) => {
          res.status(500).send(err);
        });
      }
    });
  },
};
