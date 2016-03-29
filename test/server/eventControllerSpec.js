import server from '../../server/server';
import requestModule from 'supertest';
import Event from '../../server/events/eventModel';

const request = requestModule(server);

const testEvent = {
  name: 'red spread',
  location: 'mars',
  description: 'bring your own oxygen tank!',
  toBring: { contributions: [] },
};

describe('Event API: Event Controller Spec', () => {
  before('create and store test event', (done) => {
    new Event(testEvent)
    .save()
    .then((event) => {
      testEvent.id = event.get('id');
      console.log(`Created test event id: ${testEvent.id}`);
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  });

  after('delete stored test event', (done) => {
    Event
    .where({
      id: testEvent.id,
    })
    .fetch()
    .then((event) => {
      event
      .destroy()
      .then(() => {
        console.log('Deleted test event');
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  });

  it('GET / should respond with 200', (done) => {
    request
    .get('/')
    .expect(200)
    .end(done);
  });

  it('GET /api/events/ should respond with 200', (done) => {
    request
    .get('/api/events')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(done);
  });

  it('GET /api/events/:event_id should respond with 200', (done) => {
    request
    .get(`/api/events/${testEvent.id}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(done);
  });

  it('PUT /api/events/:event_id should respond with 200', (done) => {
    request
    .put(`/api/events/${testEvent.id}`)
    .send({
      name: 'blue spread',
      location: 'neptune',
    })
    .expect(200)
    .end(done);
  });

  // Need a user id to access this endpoint
  // TODO move to user spec
  xit('POST /api/events/:user_id should respond with 200', (done) => {
    request
    .put(`/api/events/${testUser.id}`)
    .send({
      name: 'Something!',
      location: 'Somewhere!',
    })
    .expect(200)
    .end(done);
  });

  it('DELETE /api/events/:event_id should respond with 200', (done) => {
    request
    .delete(`/api/events/${testEvent.id}`)
    .expect(200)
    .end(done);
  });

  it('GET /api/events/:event_id should respond with 404 for delete event', (done) => {
    request
    .get(`/api/events/${testEvent.id}`)
    .expect(404)
    .end(done);
  });
});
