const User = require('./userModel');
const axios = require('axios');

module.exports = {
  testInsta(req, res) {
    console.log('in testinsa!!', req.body)
    axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${req.body.accessToken}`)
    .then((data) => {
      console.log('DATA', data)
      res.status(201).send(data)
    })
    .catch((err) => {
      console.error('myErr', err);
      res.sendStatus(500);
    });
  },
  getAllUsers(req, res) {
    User.fetchAll({
      // NOTE password is being sent to front-end
      withRelated: ['events'],
      columns: ['id', 'email', 'username', 'password', 'bio', 'location', 'is_traveling'],
    })
    .then((users) => {
      console.log(users.models[0].relations.events);
      res.status(200).send(users.models);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  },
  getUserbyId(req, res) {
    User.where({ id: req.params.userId })
    .fetch({
      withRelated: ['events'],
      columns: [
        'id', 'email', 'username', 'bio', 'location', 'is_traveling', 'instagram_id', 'instagram_token', 'instagram_username', 'instagram_profile_pic',
      ],
    })
    .then((user) => {
      if (!user) {
        res.status(404).send('User not found');
      } else {
        res.status(200).send(user);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },

  createUser(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const bio = req.body.bio;
    const city = req.body.city;
    const country = req.body.country;

    if (!email || !password) {
      res.json({ success: false, message: 'Please enter email and password.' });
    }

    new User({ username })
    .fetch()
    .then((user) => {
      if (!user) {
        const newUser = new User({
          username,
          password,
          email,
          bio,
          city,
          country,
        });

        newUser.save()
        .then((createdUser) => {
          // TODO: omit password
          res.status(201).send(createdUser);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
      }
    });
  },

  editUser(req, res) {
    console.log('REQ BODY XXX', req.body)
    User.where({ id: req.params.userId })
    .fetch()
    .then((user) => {
      if (!user) {
        res.status(404).send('User not found');
      } else {
        user.save({
          email: req.body.email,
          username: req.body.username,
          bio: req.body.bio,
          location: req.body.location,
          is_traveling: req.body.is_traveling,
          instagram_username: req.body.instagram_username,
        });
      }
    })
    .then((user) => {
      // TODO: why is this undefined?
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },

  deleteUser(req, res) {
    User.where({ id: req.params.userId })
    .fetch()
    .then((user) => {
      if (!user) {
        res.status(404).send('User not found');
      } else {
        user.destroy()
        .then(() => {
          res.status(200).send('User deleted');
        });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },

  saveAvatar(req, res) {
    const id = req.body.id;
    const avatarUrl = req.body.url;
    console.log('id: ', id, 'url: ', avatarUrl);
    // save avatarUrl to the user
  },
};
// to test edit
// curl -H "Content-Type: application/json" -X PUT -d '{"password":"abddf"}' http://localhost:8080/api/users/2

// to add a user
// curl -H "Content-Type: application/json" -X POST -d '{"username":"User","password":"xyz","email":"example@example.com"}' http://localhost:8080/api/users
