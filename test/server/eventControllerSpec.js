import server from '../../server/server';
import requestModule from 'supertest';
import Event from '../../server/events/eventModel';

const request = requestModule(server);

const testEvent = {
  name: 'red spread',
  location: 'mars',
  coordinates: 'n/a',
  description: 'bring your own oxygen tank!',
  toBring: { contributions: [] },
};

describe('Event API: Event Controller Spec', () => {
  before('create and store test event', (done) => {
    new Event(testEvent)
    .save()
    .then((event) => {
      console.log('Created test event');
      testEvent.id = event.get('id');
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  });

  after('delete stored test event', function (done) {
    this.timeout(10000);
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

  xit('GET / should respond with 200', (done) => {
    request
    .get('/')
    .expect(200)
    .end(done);
  });

  it('GET /api/events/ should respond with 200', function (done) {
    this.timeout(10000);
    request
    .get('/api/events')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(done);
  });

  xit('GET /api/events/:user_id should respond with 200', function (done) {
    const id = 1;
    this.timeout(10000);
    request
    .expect('Content-Type', /json/)
    .get(`/api/events/${id}`)
    .expect(200)
    .end(done);
  });

  // requires user 1 to be in db
  xit('POST /api/events/:id should respond with 200', function (done) {
    this.timeout(3000);
    request
    .post(`/api/events/${1}`)
    .send({
      name: 'blue spread',
      location: 'neptune',
    })
    .expect(200)
    .end(done);
  });
});
