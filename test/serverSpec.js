const server = require('../server/server');
const request = require('supertest');

describe("Server and API", function () {
  describe("GET", function () {
    it("/ should respond with 200", function (done) {
      request(server)
      .get('/')
      .expect(200)
      .end(done);
    });

    it("/api/events/ should respond with 200", function (done) {
      this.timeout(10000);
      request(server)
      .get('/api/events')
      .expect(200)
      .end(done);
    });
  });

});
