/**
 * @param {number} a
 * @param {number} b
 */
const errorMessage = (a, b) => {
  if (typeof a !== 'number' && typeof b !== 'number') throw new TypeError(`"${a}" and "${b}" most be a number`)
  if (typeof a !== 'number') throw new TypeError(`"${a}" is not a number`)
  if (typeof b !== 'number') throw new TypeError(`"${b}" is not a number`)
}

module.exports = errorMessage
