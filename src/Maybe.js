/**
 *  @fileOverview Maybe
 *
 */

export default class Maybe {
  static of(value) {
    return new Maybe(value);
  }

  static Just(value) {
    return Maybe.of(value);
  }

  static Nothing() {
    return Maybe.of(null);
  }

  constructor(value) {
    this.value = value;
  }

  isNothing() {
    return this.value === null;
  }

  map(f) {
    return this.isNothing() ? this : Maybe.of(f(this.value));
  }

  get() {
    return this.value;
  }

  /**
   * aka flatMap
   *
   * @param {function} f return a maybe
   */
  chain(f) {
    return this.isNothing() ? this : f(this.value);
  }

  getOrElse(defaultValue) {
    return this.isNothing ? defaultValue : this.value;
  }

  toString() {
    return this.isNothing() ? "Maybe.Nothing" : this.value;
  }
}
