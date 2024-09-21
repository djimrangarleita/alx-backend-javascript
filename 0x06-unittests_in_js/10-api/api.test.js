/* eslint-disable mocha/max-top-level-suites */
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

describe('GET /cart/:id', () => {
  const url = 'http://localhost:7865/cart';

  it('should return 200 status with correct body when id=10 /', (done) => {
    const cartNumber = 10;
    request.get(`${url}/${cartNumber}`, (error, res, body) => {
      if (error) {
        return done(error);
      }
      expect(res.statusCode).to.equal(200);
      expect(res.headers['content-type']).to.contain('text/plain');
      expect(body).to.equal(`Payment methods for cart ${cartNumber}`);
      done();
    });
  });

  it('should return 404 status when cart id is the string cart', (done) => {
    request.get(`${url}/cart`, (error, res) => {
      if (error) {
        return done(error);
      }
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return 404 status when cart id is the float 12.2', (done) => {
    request.get(`${url}/12.2`, (error, res) => {
      if (error) {
        return done(error);
      }
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('GET /available_payments', () => {
  const url = 'http://localhost:7865/available_payments';

  it('should return an object with the list of payment methods', (done) => {
    request.get(url, (error, res, body) => {
      if (error) {
        return done(error);
      }
      expect(res.statusCode).to.equal(200);
      expect(res.headers['content-type']).to.contain('application/json');
      const data = JSON.parse(body);
      expect(data).to.have.property('payment_methods');
      expect(data.payment_methods).to.have.property('credit_cards');
      expect(data.payment_methods).to.have.property('paypal');
      done();
    });
  });
});

describe('GET /login', () => {
  const url = 'http://localhost:7865/login';

  it('should return userName when available in request body', (done) => {
    const userName = 'Djimra';
    request.post({
      url,
      json: true,
      body: { userName },
    }, (error, res, body) => {
      if (error) {
        return done(error);
      }
      expect(res.statusCode).to.equal(200);
      expect(res.headers['content-type']).to.contain('text/plain');
      expect(body).to.equal(`Welcome ${userName}`);
      done();
    });
  });

  it('should return undefined when username not available in request body', (done) => {
    request.post({
      url,
      json: true,
    }, (error, res, body) => {
      if (error) {
        return done(error);
      }
      expect(res.statusCode).to.equal(200);
      expect(res.headers['content-type']).to.contain('text/plain');
      expect(body).to.equal('Welcome undefined');
      done();
    });
  });
});
