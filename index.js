const { validateNumbers } = require('./scripts/validateNumber');
const { errorMessage } = require('./scripts/errorMesagge');

const maths = {
    /**
     * Add
     * @param {number} a number
     * @param {number} b number
     * @returns {number} a + b // return false if one or both paramters is not number
     * @example maths.add(1, 2) // return 3
     */
    add(a, b) {

        if (validateNumbers(a, b)) {

            return a + b;

        }
        return errorMessage(a, b);

    },

    /**
     * Substract
     * @param {number} a number
     * @param {number} b number
     * @returns {number} a - b return false if one or both paramters is not number
     * @example maths.substract(1,2) // return -1
     */
    substract(a, b) {

        if (validateNumbers(a, b)) {

            return a - b;

        }
        return errorMessage(a, b);

    },

    /**
     * Multiply
     * @param {number} a number
     * @param {number} b number
     * @returns {number} a * b return false if one or both paramters is not number
     * @example maths.multiply(1,2) // return 2
     */
    multiply(a, b) {

        if (validateNumbers(a, b)) {

            return a * b;

        }
        return errorMessage(a, b);

    },

    /**
     * Divide
     * @param {number} a number
     * @param {number} b number
     * @returns {number} a / b return false if one or both paramters is not number
     * @example maths.divide(1,2) // return 0.5
     */
    divide(a, b) {

        if (b === 0) {

            console.error(`Division by "${b}" is not possible.`);
            return false;

        }
        if (validateNumbers(a, b)) {

            return a / b;

        }
        return errorMessage(a, b);

    },
};

maths.maths = maths;
maths.default = maths;
module.exports = maths;
