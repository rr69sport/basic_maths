const validateNumbers = require('./scripts/validateNumbers')
const errorMessage = require('./scripts/errorMessage')
const validatePow = require("./scripts/validatePow");

const basicMaths = {
    /**
     * Method Add
     * @param {number} a
     * @param {number} b
     * @returns {number} a + b => result
     * @example basicMaths.add(1,2) // return 3
     */
    add(a, b) {

        if (validateNumbers(a, b)) {

            return a + b;

        }
        return errorMessage(a, b);

    },
    /**
     * Method Substract
     * @param {number} a
     * @param {number} b
     * @returns {number} a - b => result
     * @example basicMaths.substract(1,2) // return -1
     */
    substract(a, b) {

        if (validateNumbers(a, b)) {

            return a - b;

        }
        return errorMessage(a, b);

    },
    /**
     * Method Multiply
     * @param {number} a
     * @param {number} b
     * @returns {number} a + b => result
     * @example basicMaths.multiply(1,2) // return 2
     */
    multiply(a, b) {

        if (validateNumbers(a, b)) {

            return a * b;

        }
        return errorMessage(a, b);

    },
    /**
     * Method Divide
     * @param {number} a
     * @param {number} b
     * @returns {number} a + b => result
     * @example basicMaths.divide(1,2) // return 0.5
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
    /**
     * Method Pow Operation
     * @param {number} a
     * @param {number} b
     * @returns {number} a + b => result
     * @example basicMaths.powOperation(2,2) // return 8
     */
    powOperation(a, b) {

        if (validateNumbers(a, b)) {

            return validatePow(a, b);

        }
        return errorMessage(a, b);

    },
};

basicMaths.basicMaths = basicMaths;
basicMaths.default = basicMaths;
module.exports = basicMaths;
