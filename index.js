import validateNumbers from './scripts/validateNumbers';
import errorMessage from './scripts/errorMessage';
import validatePow from './scripts/validatePow';

const maths = {
    add(a, b) {

        if (validateNumbers(a, b)) {

            return a + b;

        }
        return errorMessage(a, b);

    },
    substract(a, b) {

        if (validateNumbers(a, b)) {

            return a - b;

        }
        return errorMessage(a, b);

    },
    multiply(a, b) {

        if (validateNumbers(a, b)) {

            return a * b;

        }
        return errorMessage(a, b);

    },
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
    powOperation(a, b) {

        if (validateNumbers(a, b)) {

            return validatePow(a, b);

        }
        return errorMessage(a, b);

    }
};

export default maths;
