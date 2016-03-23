const Event = require('./eventModel');

const eventController = {
  getAllEvents(req, res) {
    Event.fetchAll({
      withRelated: [{ users(qb) {
        // NOTE Omiting password
        qb.column('email', 'username', 'bio', 'is_traveling', 'location');
      } }],
    })
    .then((events) => {
      // events have related users and can be found thru .relations
      // for example events.models[0].relations.users.models[0]
      // the user that created the event is indicated by "_pivot_is_creator": true
      res.status(200).send(events.models);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  },

  getEventbyId(req, res) {
    Event.fetchAndPopulate({ id: req.userId || req.params.eventId })
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

  // For now event info should be in the body and creator id should be in params
  // Creates event and puts creator's user.id and the event.id in events_users, sets is_creator to true for user.id who created the event
  createEvent(req, res, next) {
    new Event({
      name: req.body.name,
      location: req.body.location,
      coordinates: req.body.coordinates,
      description: req.body.description,
      time: req.body.time,
      date: req.body.date,
      toBring: { contributions: req.body.toBring },
    })
    .save()
    .then((event) => {
      // create event and associate in junction table
      event.users()
      .attach(req.params.userId)
      .then((eventUser) => {
        // update the "pivot" (the junction table)
        return eventUser.updatePivot({
          is_creator: true,
        });
      })
      .then((pivotStatus) => {
        if (pivotStatus.add) {
          req.userId = event.id;
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
    console.log('REQ.PARAMS ', req.params);
    Event.fetchAndPopulate({ id: req.params.eventId })
    .then((event) => {
      if (!event) {
        res.sendStatus(404);
      } else {
        // TODO this probably wont updated event properly
        // Look at userController
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
};

module.exports = eventController;
