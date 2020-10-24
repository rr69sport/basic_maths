
const validateNumbers = (a, b) => {
    if (!isNaN(a) && !isNaN(b)) {
        return true;
    } else {
        return false;
    }
};

const errorMessage = (a, b) => {
    if (isNaN(a)) {
        console.error(`"${a}" is not a number`);
    }
    if (isNaN(b)) {
        console.error(`"${b}" is not a number`);
    }
    return false;
};

const maths = {
    /**
     * Add
     * @param {number} a number
     * @param {number} b number
     * @returns {number} a + b
     * @example maths.add(1, 2) // return 3
     */
    add(a, b) {
        if (validateNumbers(a, b)) {
            return a + b;
        } else {
            return errorMessage(a, b);
        }
    },

    /**
     * Substract
     * @param {number} a number
     * @param {number} b number
     * @returns {number} a - b
     * @example maths.substract(1,2) // return -1
     */
    substract(a, b) {
        if (validateNumbers(a, b)) {
            return a - b;
        } else {
            return errorMessage(a, b);
        }
    },

    /**
     * Multiply
     * @param {number} a number
     * @param {number} b number
     * @returns {number} a * b
     * @example maths.multiply(1,2) // return 2
     */
    multiply(a, b) {
        if (validateNumbers(a, b)) {
            return a * b;
        } else {
            return errorMessage(a, b);
        }
    },

    /**
     * Divide
     * @param {number} a number
     * @param {number} b number
     * @returns {number} a / b
     * @example maths.divide(1,2) // return 0.5
     */
    divide(a, b) {
        if (b === 0) {
            console.error(`Division by "${b}" is not possible.`);
            return false;
        }
        if (validateNumbers(a, b)) {
            return a / b;
        } else {
            return errorMessage(a, b);
        }
    },
};
module.exports = maths;