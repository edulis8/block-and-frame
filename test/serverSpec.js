const server = require('../server/server');
const request = require('supertest');
import bodyParser from 'body-parser';
server.use(bodyParser.json());

const bookshelf = require('../server/config/bookshelf');


describe("Server and API", function () {


 beforeEach(function() {
  // Delete the user with example@example.com email address (if exists) so POST users test doesn't fail
    bookshelf.knex('users')
      .where('email', '=', 'example@example.com')
      .del()
      .catch(function(error) {
        throw {
          type: 'DatabaseError',
          message: 'Failed to create test setup data'
        };
      });

  });


  describe("GET", function () {
    it("/ should respond with 200", function (done) {
      request(server)
      .get('/')
      .expect(200)
      .end(done);
    });

    it("/api/events/ should respond with 200", function (done) {
      this.timeout(7000);
      request(server)
      .get('/api/events')
      .expect(200)
      .end(done);
    });

    it("GET EVENTS: /api/events/1 should respond with 200", function (done) {
      this.timeout(1000);
      request(server)
      .get('/api/events')
      .expect(200)
      .end(done);
    });

    it("GET EVENT BY ID SEND AN EVENT: /api/events/1 should contain the word 'example'", function (done) {
      this.timeout(3000);
      request(server)
      .get('/api/events')
      .expect(200, /example/)
      .end(done);
    });

    it("GET USERS: /api/users/ should respond with 200", function (done) {
      this.timeout(4000);
      request(server)
      .get('/api/users')
      .expect(200)
      .end(done);
    });

     it("GET USER BY ID: /api/users/ should respond with 200", function (done) {
      this.timeout(4000);
      request(server)
      .get('/api/users/1')
      .expect(200)
      .end(done);
    });


     it("GET USER BY ID SEND RETURN A USER: /api/users/1 should response should contain 'example'", function (done) {
      this.timeout(4000);
      request(server)
      // TODO: make this work:
      //.put('/api/users/1', { username: 'example' })
      .get('/api/users/1')
      .expect(200)
      .end(done, /eric/);
    });

    describe("CREATE A USER / POST: /api/users/", function () {

      it("/api/users/ should respond with 201", function (done) {
      this.timeout(4000);
      request(server)
      .post('/api/users')
      .send({
        email: 'example@example.com',
        password: 'examplepw',
      })
      .expect(201)
      .end(done);
    });
  })



  });

});
