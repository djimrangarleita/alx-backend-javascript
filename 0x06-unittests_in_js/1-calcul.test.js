/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('#calculateNumber()', () => {
  const SUM = 'SUM';
  const SUBTRACT = 'SUBTRACT';
  const DIVIDE = 'DIVIDE';
  describe('#SUM', () => {
    it('should return 5 for a=1 and b=4', () => {
      assert.equal(calculateNumber(SUM, 1, 4), 5);
    });
    it('should return 5 for a=1, b=3.7', () => {
      assert.equal(calculateNumber(SUM, 1, 3.7), 5);
    });
    it('should return 5 for a=1.2 and b=3.7', () => {
      assert.equal(calculateNumber(SUM, 1.2, 3.7), 5);
    });
    it('should return 6 for a=1.5 and b=3.7', () => {
      assert.equal(calculateNumber(SUM, 1.5, 3.7), 6);
    });
    it('should return 1 for a=1.0 and b=0', () => {
      assert.equal(calculateNumber(SUM, 1.0, 0), 1);
    });
    it('should return -5 for a=-1.5 and b=-3.7', () => {
      assert.equal(calculateNumber(SUM, -1.5, -3.7), -5);
    });
    it('should return 3 for a=-1.5 and b=3.7', () => {
      assert.equal(calculateNumber(SUM, -1.5, 3.7), 3);
    });
    it('should return 4 for a=0.0001 and b=3.7', () => {
      assert.equal(calculateNumber(SUM, 0.0001, 3.7), 4);
    });
    it('should return 4 for a=0.4999 and b=3.7', () => {
      assert.equal(calculateNumber(SUM, 0.4999, 3.7), 4);
    });
  });
  describe('#SUBTRACT', () => {
    it('should return -3 for a=1 and b=4', () => {
      assert.equal(calculateNumber(SUBTRACT, 1, 4), -3);
    });
    it('should return 3 for a=3.7, b=1', () => {
      assert.equal(calculateNumber(SUBTRACT, 3.7, 1), 3);
    });
    it('should return 3 for a=1.2 and b=3.7', () => {
      assert.equal(calculateNumber(SUBTRACT, 3.7, 1.2), 3);
    });
    it('should return 2 for a=3.7 and b=1.5', () => {
      assert.equal(calculateNumber(SUBTRACT, 3.7, 1.5), 2);
    });
    it('should return 1 for a=1.0 and b=0', () => {
      assert.equal(calculateNumber(SUBTRACT, 1.0, 0), 1);
    });
    it('should return 3 for a=-1.5 and b=-3.7', () => {
      assert.equal(calculateNumber(SUBTRACT, -1.5, -3.7), 3);
    });
    it('should return 5 for a=3.7 and b=-1.5', () => {
      assert.equal(calculateNumber(SUBTRACT, 3.7, -1.5), 5);
    });
    it('should return -4 for a=0.0001 and b=3.7', () => {
      assert.equal(calculateNumber(SUBTRACT, 0.0001, 3.7), -4);
    });
    it('should return -4 for a=0.4999 and b=3.7', () => {
      assert.equal(calculateNumber(SUBTRACT, 0.4999, 3.7), -4);
    });
  });
  describe('#DIVIDE', () => {
    it('should return 2 for a=4 and b=2', () => {
      assert.equal(calculateNumber(DIVIDE, 4, 2), 2);
    });
    it('should return 0.5 for a=2 and b=4', () => {
      assert.equal(calculateNumber(DIVIDE, 2, 4), 0.5);
    });
    it('should return 0 for a=0.0001 and b=4', () => {
      assert.equal(calculateNumber(DIVIDE, 0.0001, 4), 0);
    });
    it('should return 3 for a=-12.5 and b=-4.1002', () => {
      assert.strictEqual(calculateNumber(DIVIDE, -12.5, -4.1002), 3);
    });
    it('should return 3 for a=-12.5 and b=4.1002', () => {
      assert.strictEqual(calculateNumber(DIVIDE, -12.5, 4.1002), -3);
    });
    it('should return Error for a=-12.5 and b=-0.1002', () => {
      assert.strictEqual(calculateNumber(DIVIDE, -12.5, -0.1002), 'Error');
    });
  });
  describe('#WRONGOPERATOR', () => {
    it('should return Error for type=DIVID', () => {
      assert.equal(calculateNumber('DIVID', 12, 3), 'Error');
    });
  });
});
