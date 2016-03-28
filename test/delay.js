import { expect } from 'chai';
const DELAY = 10000;

describe('Delaying tests for database and webpack ...', () => {
  it(`Delaying ${DELAY}ms`, (done) => {
    setTimeout(() => {
      expect(true).to.be.true;
      done();
    }, DELAY);
  });
});
