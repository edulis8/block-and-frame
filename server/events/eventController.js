const Event = require('./eventModel');
const userController = require('../users/userController');
const User = require('../users/userModel').User;
const Comment = require('./commentModel');

const eventController = {
  getAllEvents(req, res) {
    Event.fetchAll({
      withRelated: [{ users(qb) {
        // Omiting password
        qb.column('email', 'username', 'bio', 'is_traveling', 'location', 'instagram_username', 'instagram_profile_pic', 'instagram_id');
      } }],
    })
    .then((events) => {
      // Events have related users and can be found thru .relations
      // For example events.models[0].relations.users.models[0]
      // The user that created the event is indicated by "_pivot_is_creator": true
      res.status(200).send(events.models);
    })
    .catch((err) => {
      res.staus(500).send(err);
    });
  },

  getEventbyId(req, res) {
    // Check if req has event id if not check params
    // createEvent reuses this method by sending req with an eventId
    Event.fetchAndPopulate({ id: req.eventId || req.params.eventId })
    .then((event) => {
      if (!event) {
        res.sendStatus(404);
      } else {
        res.status(200).send(event);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },

  createEvent(req, res, next) {
    const userId = req.user.get('id');

    if (req.body.hashtag[0] !== '#') {
      req.body.hashtag = `#${req.body.hashtag}`;
    }
    new Event({
      name: req.body.name,
      location: req.body.location,
      coordinates: req.body.coordinates,
      description: req.body.description,
      time: req.body.time,
      date: req.body.date,
      hashtag: req.body.hashtag,
      toBring: { contributions: req.body.toBring },
    })
    .save()
    .then((event) => {
      // Create event and associate user in join table
      event.users()
      .attach(userId)
      .then((eventUser) => {
        // Update record to reflect user is host
        return eventUser.updatePivot({
          is_creator: true,
        });
      })
      .then((pivotStatus) => {
        if (pivotStatus.add) {
          req.eventId = event.id;
          // Reuse same function to get same event again
          // To an event with the user relations populated
          eventController.getEventbyId(req, res, next);
        } else {
          res.status(500).send(pivotStatus);
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },

  editEvent(req, res) {
    Event
    .where({ id: req.params.eventId })
    .fetch()
    .then((event) => {
      if (!event) {
        res.sendStatus(404);
      } else {
        event.save(req.body);
      }
    })
    .then((event) => {
      res.status(200).send(event);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },

  deleteEvent(req, res) {
    Event.fetchAndPopulate({ id: req.params.eventId })
    .then((event) => {
      if (!event) {
        res.sendStatus(404);
      } else {
        event.destroy()
        .then(() => {
          res.sendStatus(200);
        });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },

  joinEvent(req, res) {
    const userId = req.user.get('id');
    const emailInfo = req.body;
    emailInfo.userId = userId;

    userController.emailHost(emailInfo);

    Event.fetchAndPopulate({ id: req.params.eventId })
    .then((event) => {
      event
      .users()
      // Attach pivot but leave is_creator null
      .attach(userId)
      .then((pivotStatus) => {
        res.status(200).send(pivotStatus);
      })
      .catch((err) => {
        // 23503 === user or event doesn exist
        // 23505 === user already attending or hosting event
        if (err.code === '23503' || err.code === '23505') {
          res.status(400).send(err);
        } else {
          res.status(500).send(err);
        }
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },

  addComment(req, res) {
    // Find the user who comment belongs to
    User.where({ id: req.body.userId })
    .fetch().then((foundUser) => {
      // Save the comment
      new Comment({
        user_id: req.body.userId,
        text: req.body.text,
        event_id: req.params.eventId,
        username: foundUser.attributes.username,
        created_at: req.body.timeCreated,
      }).save().then((savedComment) => {
        res.json(`Saved comment. ${savedComment}`);
      })
      .catch((err) => {
        res.end(err);
      });
    });
  },

  getComments(req, res) {
    // Comment has everything on retrieval from db
    // Except the avatar url
    Comment.where({ event_id: req.params.eventId })
    .fetchAll().then((comments) => {
      const commentData = comments.models.map((comment) => {
        return {
          id: comment.attributes.user_id,
          username: comment.attributes.username,
          timeCreated: comment.attributes.created_at,
          text: comment.attributes.text,
        };
      });
      res.json(commentData);
    })
    .catch((err) => {
      res.end(err);
    });
  },
};

module.exports = eventController;
