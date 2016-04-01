const User = require('./userModel').User;
const Image = require('./userModel').Image;
const Mailgun = require('mailgun').Mailgun;
const mg = new Mailgun(process.env.MAILGUN_KEY);

module.exports = {
  getAllUsers(req, res) {
    User.fetchAll({
      // NOTE password is being sent to front-end
      withRelated: ['events'],
      columns: ['id', 'email', 'username', 'password', 'bio', 'location', 'is_traveling'],
    })
    .then((users) => {
      res.status(200).send(users.models);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
  },

  getUserbyId(req, res) {
    User.where({ id: req.params.userId })
    // Populate user object with related event info
    .fetch({
      withRelated: ['events'],
      columns: [
        'id', 'email', 'username', 'bio', 'location', 'is_traveling', 'avatar_id', 'instagram_id', 'instagram_token', 'instagram_username', 'instagram_profile_pic',
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
        new User({
          username,
          password,
          email,
          bio,
          city,
          country,
        })
        .save()
        .then((createdUser) => {
          res.status(200).send(createdUser);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
      }
    });
  },

  // Only edit user using user info from JWT token
  editUser(req, res) {
    const userId = req.user.get('id');
    User.where({ id: userId })
    .fetch()
    .then((user) => {
      if (!user) {
        res.status(404).send('User not found');
      } else {
        return user.save({
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
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },

  // Only delete user using user info from JWT token
  deleteUser(req, res) {
    const userId = req.user.get('id');
    User.where({ id: userId })
    .fetch()
    .then((user) => {
      if (!user) {
        res.sendStatus(404);
      } else {
        user.destroy()
        .then(() => {
          res.sendStatus(200);
        });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },

  saveAvatarURL(req, res) {
    const filepath = req.body.filepath;
    const userId = req.body.userId;

    new Image({
      avatar_url: { filepath },
    })
    .save()
    .then((image) => {
      User.where({ id: userId })
      .fetch()
      .then((user) => {
        if (!user) {
          res.sendStatus(404);
        } else {
          user.save({
            avatar_id: image.attributes.id,
          });
          res.sendStatus(200);
        }
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },

  getAvatarURL(req, res) {
    User.where({ id: req.params.userId })
    .fetch()
    .then((user) => {
      Image.where({ id: user.attributes.avatar_id })
      .fetch()
      .then((image) => {
        res.json(image.attributes.avatar_url);
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },

  emailHost(userInfo, req, res) {
    User.where({ id: userInfo.userId })
    .fetch({
      withRelated: ['events'],
      columns: [
        'id', 'email', 'username', 'bio', 'location', 'is_traveling', 'instagram_id', 'instagram_token', 'instagram_username', 'instagram_profile_pic',
      ],
    })
    .then((user) => {
      if (!user) {
        res.sendStatus(404);
      } else {
        const userEmail = user.attributes.email;
        const hostEmail = userInfo.host.email;
        mg.sendText('bmoorebrian53@gmail.com', hostEmail, 'Someone joined your spread!', `Hi, ${userEmail} joined your spread`,
          err => {
            if (err) {
              console.error('Email: ', err);
            } else {
              console.log('Email sent');
            }
          });
        res.status(200).send(user);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },
};
