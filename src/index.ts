import { validateIsNumbers } from './scripts/validateIsNumber'
import { errorMessage } from './scripts/errorMessage'
import { type Operations } from './types.d'

export const basicMaths: Operations = {
  /**
   * Method Add
   * @param {number} a
   * @param {number} b
   * @return `a + b => result`
   * @example basicMaths.add(1, 2) // return 3
   */
  add (a, b) {
    if (validateIsNumbers(a, b)) return a + b
    throw new TypeError(errorMessage(a, b))
  },
  /**
   * Method Substract
   * @param {number} a
   * @param {number} b
   * @returns`a - b => result`
   * @example basicMaths.substract(3, 2) // return 1
   */
  substract (a, b) {
    if (validateIsNumbers(a, b)) return a - b
    throw new TypeError(errorMessage(a, b))
  },
  /**
   * Method Multiply
   * @param {number} a
   * @param {number} b
   * @returns `a * b => result`
   * @example basicMaths.multiply(1, 2) // return 2
   */
  multiply (a, b) {
    if (validateIsNumbers(a, b)) return a * b
    throw new TypeError(errorMessage(a, b))
  },
  /**
   * Method Divide
   * @param {number} a
   * @param {number} b
   * @returns `a / b => result`
   * @example basicMaths.divide(1, 2) // return 0.5
   */
  divide (a, b) {
    if (b === 0) throw new TypeError(`Division by "${b}" is not possible.`)
    if (validateIsNumbers(a, b)) return a / b
    throw new TypeError(errorMessage(a, b))
  },
  /**
   * Method Pow Operation
   * @param {number} a
   * @param {number} b
   * @returns `a ** b => result`
   * @example basicMaths.powOperation(2, 2) // return 8
   */
  powOperation (a, b) {
    if (validateIsNumbers(a, b)) {
      if (a === 0) return a
      if (b === 0) return 1
      return a ** b
    };
    throw new TypeError(errorMessage(a, b))
  }
}
