const { expect } = require('chai');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('#getPaymentTokenFromAPI()', () => {
  it('should resolve a promise with data when called with true', (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result).to.haveOwnProperty('data');
      expect(result.data).to.equal('Successful response from the API');
      done();
    }).catch((error) => {
      done(error);
    });
  });

  it('should return nothing when called with false', () => {
    expect(getPaymentTokenFromAPI(false)).to.equal(undefined);
  });
});
