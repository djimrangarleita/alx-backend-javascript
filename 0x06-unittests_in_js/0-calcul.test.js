const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateSumOfNumbers', () => {
  describe('#calculateNumber()', () => {
    it('should return 5 for a=1 and b=4', () => {
      assert.equal(calculateNumber(1, 4), 5);
    });

    it('should return 5 for a=1, b=3.7', () => {
      assert.equal(calculateNumber(1, 3.7), 5);
    });

    it('should return 5 for a=1.2 and b=3.7', () => {
      assert.equal(calculateNumber(1.2, 3.7), 5);
    });

    it('should return 6 for a=1.5 and b=3.7', () => {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });

    it('should return 1 for a=1.0 and b=0', () => {
      assert.equal(calculateNumber(1.0, 0), 1);
    });

    it('should return -5 for a=-1.5 and b=-3.7', () => {
      assert.equal(calculateNumber(-1.5, -3.7), -5);
    });

    it('should return 3 for a=-1.5 and b=3.7', () => {
      assert.equal(calculateNumber(-1.5, 3.7), 3);
    });

    it('should return 4 for a=0.0001 and b=3.7', () => {
      assert.equal(calculateNumber(0.0001, 3.7), 4);
    });

    it('should return 4 for a=0.4999 and b=3.7', () => {
      assert.equal(calculateNumber(0.4999, 3.7), 4);
    });
  });
});
