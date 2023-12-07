export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Not a String');
    }
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Not a String');
    }
    this._name = value;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
