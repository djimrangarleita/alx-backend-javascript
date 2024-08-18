export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError(`${typeof name} is not assignable to type 'string'`);
    }
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError(`${typeof code} is not assignable to type 'string'`);
    }
    this._code = code;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
