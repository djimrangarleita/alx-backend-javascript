const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('#calculateNumber()_chai', () => {
  const SUM = 'SUM';
  const SUBTRACT = 'SUBTRACT';
  const DIVIDE = 'DIVIDE';

  describe('#SUM', () => {
    it('should return 5 for a=1 and b=4', () => {
      expect(calculateNumber(SUM, 1, 4)).equal(5);
    });

    it('should return 5 for a=1, b=3.7', () => {
      expect(calculateNumber(SUM, 1, 3.7)).equal(5);
    });

    it('should return 5 for a=1.2 and b=3.7', () => {
      expect(calculateNumber(SUM, 1.2, 3.7)).equal(5);
    });

    it('should return 6 for a=1.5 and b=3.7', () => {
      expect(calculateNumber(SUM, 1.5, 3.7)).equal(6);
    });

    it('should return 1 for a=1.0 and b=0', () => {
      expect(calculateNumber(SUM, 1.0, 0)).equal(1);
    });

    it('should return -5 for a=-1.5 and b=-3.7', () => {
      expect(calculateNumber(SUM, -1.5, -3.7)).equal(-5);
    });

    it('should return 3 for a=-1.5 and b=3.7', () => {
      expect(calculateNumber(SUM, -1.5, 3.7)).equal(3);
    });

    it('should return 4 for a=0.0001 and b=3.7', () => {
      expect(calculateNumber(SUM, 0.0001, 3.7)).equal(4);
    });

    it('should return 4 for a=0.4999 and b=3.7', () => {
      expect(calculateNumber(SUM, 0.4999, 3.7)).equal(4);
    });
  });

  describe('#SUBTRACT', () => {
    it('should return -3 for a=1 and b=4', () => {
      expect(calculateNumber(SUBTRACT, 1, 4)).equal(-3);
    });

    it('should return 3 for a=3.7, b=1', () => {
      expect(calculateNumber(SUBTRACT, 3.7, 1)).equal(3);
    });

    it('should return 3 for a=1.2 and b=3.7', () => {
      expect(calculateNumber(SUBTRACT, 3.7, 1.2)).equal(3);
    });

    it('should return 2 for a=3.7 and b=1.5', () => {
      expect(calculateNumber(SUBTRACT, 3.7, 1.5)).equal(2);
    });

    it('should return 1 for a=1.0 and b=0', () => {
      expect(calculateNumber(SUBTRACT, 1.0, 0)).equal(1);
    });

    it('should return 3 for a=-1.5 and b=-3.7', () => {
      expect(calculateNumber(SUBTRACT, -1.5, -3.7)).equal(3);
    });

    it('should return 5 for a=3.7 and b=-1.5', () => {
      expect(calculateNumber(SUBTRACT, 3.7, -1.5)).equal(5);
    });

    it('should return -4 for a=0.0001 and b=3.7', () => {
      expect(calculateNumber(SUBTRACT, 0.0001, 3.7)).equal(-4);
    });

    it('should return -4 for a=0.4999 and b=3.7', () => {
      expect(calculateNumber(SUBTRACT, 0.4999, 3.7)).equal(-4);
    });
  });

  describe('#DIVIDE', () => {
    it('should return 2 for a=4 and b=2', () => {
      expect(calculateNumber(DIVIDE, 4, 2)).equal(2);
    });

    it('should return 0.5 for a=2 and b=4', () => {
      expect(calculateNumber(DIVIDE, 2, 4)).equal(0.5);
    });

    it('should return 0 for a=0.0001 and b=4', () => {
      expect(calculateNumber(DIVIDE, 0.0001, 4)).equal(0);
    });

    it('should return 3 for a=-12.5 and b=-4.1002', () => {
      expect(calculateNumber(DIVIDE, -12.5, -4.1002)).equal(3);
    });

    it('should return 3 for a=-12.5 and b=4.1002', () => {
      expect(calculateNumber(DIVIDE, -12.5, 4.1002)).equal(-3);
    });

    it('should return Error for a=-12.5 and b=-0.1002', () => {
      expect(calculateNumber(DIVIDE, -12.5, -0.1002)).equal('Error');
    });
  });

  describe('#WRONGOPERATOR', () => {
    it('should return Error for type=DIVID', () => {
      expect(calculateNumber('DIVID', 12, 3)).equal('Error');
    });
  });
});
