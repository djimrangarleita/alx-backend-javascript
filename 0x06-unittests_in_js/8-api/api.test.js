const { expect } = require('chai');
const request = require('request');

describe('GET /', () => {
  const url = 'http://localhost:7865';

  it('should return 200 status when requesting /', (done) => {
    request.get(url, (error, res) => {
      if (error) {
        return done(error);
      }
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct response body when requesting /', (done) => {
    request.get(url, (error, res, body) => {
      if (error) {
        return done(error);
      }
      expect(res.headers['content-type']).to.contain('text/plain');
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
