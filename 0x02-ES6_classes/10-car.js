export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand) {
    // if (typeof brand !== 'string') {
    //   throw new TypeError(`${typeof brand} is not assignable to type 'string'`);
    // }
    this._brand = brand;
  }

  get motor() {
    return this._motor;
  }

  set motor(motor) {
    // if (typeof motor !== 'string') {
    //   throw new TypeError(`${typeof motor} is not assignable to type 'string'`);
    // }
    this._motor = motor;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    // if (typeof color !== 'string') {
    //   throw new TypeError(`${typeof color} is not assignable to type 'string'`);
    // }
    this._color = color;
  }

  cloneCar() {
    return new this.constructor();
  }
}
