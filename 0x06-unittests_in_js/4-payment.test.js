const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('stubCalculateNumberOfUtils', () => {
  it('stub the calculateNumber function in Utils', () => {
    const utilsCalculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(utilsCalculateNumberStub.calledWith('SUM', 100, 20)).true;
    expect(consoleSpy.calledWith('The total is: 10')).true;
    utilsCalculateNumberStub.restore();
    consoleSpy.restore();
  });
});
