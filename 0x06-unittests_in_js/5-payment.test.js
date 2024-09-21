const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');

describe('#sendPaymentRequestToApi()', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should return 120 when called with a=100 and b=20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 120')).true;
    expect(consoleSpy.calledOnce).true;
  });

  it('should return 20 when called with a=10 and b=10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWith('The total is: 20')).true;
    expect(consoleSpy.calledOnce).true;
  });
});
