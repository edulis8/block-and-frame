const server = require('../server/server');
const request = require('supertest').agent(server);

describe("Server and API", () => {
  describe("GET /", () => {
    it("should respond with 200", (done) => {
      request
      .get('/')
      .expect(200, done);
    });
  });
});
