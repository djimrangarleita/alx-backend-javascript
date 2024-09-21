const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('validateUsageOfUtils', () => {
  it('validate the usage of the Utils function', () => {
    const utilsCalculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(utilsCalculateNumberSpy.calledWith('SUM', 100, 20)).true;
    expect(consoleSpy.calledWith('The total is: 120')).true;
    utilsCalculateNumberSpy.restore();
    consoleSpy.restore();
  });
});
