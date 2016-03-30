import server from '../../server/server';
import requestModule from 'supertest';
import { User } from '../../server/users/userModel';

const request = requestModule(server);

const testUser = {
  username: 'testuser',
  password: 'testpassword',
  email: 'testemail',
};

describe('User API: User Controller Spec', () => {
  before('create and store test user', (done) => {
    new User(testUser)
    .save()
    .then((user) => {
      testUser.id = user.get('id');
      console.log(`Created test user id: ${testUser.id}`);
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  });

  after('delete stored test user', (done) => {
    User
    .where({
      id: testUser.id,
    })
    .fetch()
    .then((user) => {
      user
      .destroy()
      .then(() => {
        console.log('Deleted test user');
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

  it('GET /api/users/ should respond with 200', (done) => {
    request
    .get('/api/users')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(done);
  });

  it('GET /api/users/:user_id should respond with 200', (done) => {
    request
    .get(`/api/users/${testUser.id}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(done);
  });

  xit('PUT /api/users/:user_id should respond with 200', (done) => {
    request
    .put(`/api/users/${testUser.id}`)
    .send({
      email: 'example@example.com',
      password: 'examplepw123',
    })
    .expect(200)
    .end(done);
  });

  // TODO delete after test
  xit('POST /api/users/ should respond with 201', (done) => {
    request
    .post('/api/users')
    .send({
      email: 'example@example.com',
      password: 'examplepw',
    })
    .expect(200)
    .end(done);
  });

  xit('DELETE /api/users/user_id should respond with 200', (done) => {
    request
    .delete(`/api/users/${testUser.id}`)
    .expect(200)
    .end(done);
  });

  xit('GET /api/users/:user_id should respond with 404 for delete user', (done) => {
    request
    .get(`/api/users/${testUser.id}`)
    .expect(404)
    .end(done);
  });
});
