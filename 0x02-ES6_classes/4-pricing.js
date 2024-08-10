import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError(`${typeof amount} is not assignable to type 'number'`);
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError(`${currency} is not assignable to type 'Currency'`);
    }
    this._currency = currency;
  }

  /**
   * Return string representation of the price
   * @returns {string} formatted price
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * @param {number} amount
   * @param {number} conversionRate
   * @returns {number} amount multiplied by conversion rate
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError(`${typeof amount} is not assignable to type 'number'`);
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError(`${typeof conversionRate} is not assignable to type 'number'`);
    }
    return amount * conversionRate;
  }
}
