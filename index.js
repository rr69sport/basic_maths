const validateNumbers = require('./scripts/validateNumbers')
const errorMessage = require('./scripts/errorMessage')

const basicMaths = {
  /**
   * Method Add
   * @param {number} a
   * @param {number} b
   * @return {number} `a + b => result`
   * @throws **TypeError** if `a` or `b` is not a number.
   * @example basicMaths.add(1, 2) // return 3
   */
  add (a, b) {
    if (validateNumbers(a, b)) return a + b
    throw errorMessage(a, b)
  },
  /**
   * Method Substract
   * @param {number} a
   * @param {number} b
   * @returns {number} `a - b => result`
   * @throws **TypeError** if `a` or `b` is not a number.
   * @example basicMaths.substract(3, 2) // return 1
   */
  substract (a, b) {
    if (validateNumbers(a, b)) return a - b
    throw errorMessage(a, b)
  },
  /**
   * Method Multiply
   * @param {number} a
   * @param {number} b
   * @returns {number} `a * b => result`
   * @throws **TypeError** if `a` or `b` is not a number.
   * @example basicMaths.multiply(1, 2) // return 2
   */
  multiply (a, b) {
    if (validateNumbers(a, b)) return a * b
    throw errorMessage(a, b)
  },
  /**
   * Method Divide
   * @param {number} a
   * @param {number} b
   * @returns {number} `a / b => result`
   * @throws **TypeError** if `a` or `b` is not a number.
   * @example basicMaths.divide(1, 2) // return 0.5
   */
  divide (a, b) {
    if (b === 0) throw console.error(`Division by "${b}" is not possible.`)
    if (validateNumbers(a, b)) return a / b
    throw errorMessage(a, b)
  },
  /**
   * Method Pow Operation
   * @param {number} a
   * @param {number} b
   * @returns {number} `a ** b => result`
   * @throws **TypeError** if `a` or `b` is not a number.
   * @example basicMaths.powOperation(2, 2) // return 8
   */
  powOperation (a, b) {
    if (validateNumbers(a, b)) {
      if (a === 0) return a
      if (b === 0) return 1
      return a ** b
    };
    throw errorMessage(a, b)
  }
}

basicMaths.basicMaths = basicMaths
basicMaths.default = basicMaths
module.exports = basicMaths
