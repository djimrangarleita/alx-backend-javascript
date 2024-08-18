export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError(`${typeof size} is not assignable to type 'number'`);
    }
    this._size = size;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError(`${typeof location} is not assignable to type 'string'`);
    }
    this._location = location;
  }

  toString() {
    return this.location;
  }

  valueOf() {
    return this.size;
  }
}
