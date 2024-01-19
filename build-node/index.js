"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicMaths = void 0;
var validateIsNumber_1 = require("./scripts/validateIsNumber");
var errorMessage_1 = require("./scripts/errorMessage");
exports.basicMaths = {
    /**
     * Method Add
     * @return `a + b => result`
     * @example basicMaths.add(1, 2) // return 3
     */
    add: function (a, b) {
        if ((0, validateIsNumber_1.validateIsNumbers)(a, b))
            return a + b;
        throw new TypeError((0, errorMessage_1.errorMessage)(a, b));
    },
    /**
     * Method Substract
     * @returns`a - b => result`
     * @example basicMaths.substract(3, 2) // return 1
     */
    substract: function (a, b) {
        if ((0, validateIsNumber_1.validateIsNumbers)(a, b))
            return a - b;
        throw new TypeError((0, errorMessage_1.errorMessage)(a, b));
    },
    /**
     * Method Multiply
     * @returns `a * b => result`
     * @example basicMaths.multiply(1, 2) // return 2
     */
    multiply: function (a, b) {
        if ((0, validateIsNumber_1.validateIsNumbers)(a, b))
            return a * b;
        throw new TypeError((0, errorMessage_1.errorMessage)(a, b));
    },
    /**
     * Method Divide
     * @returns `a / b => result`
     * @example basicMaths.divide(1, 2) // return 0.5
     */
    divide: function (a, b) {
        if (b === 0)
            throw new TypeError("Division by \"".concat(b, "\" is not possible."));
        if ((0, validateIsNumber_1.validateIsNumbers)(a, b))
            return a / b;
        throw new TypeError((0, errorMessage_1.errorMessage)(a, b));
    },
    /**
     * Method Pow Operation
     * @returns `a ** b => result`
     * @example basicMaths.powOperation(2, 2) // return 8
     */
    powOperation: function (a, b) {
        if ((0, validateIsNumber_1.validateIsNumbers)(a, b)) {
            if (a === 0)
                return a;
            if (b === 0)
                return 1;
            return Math.pow(a, b);
        }
        ;
        throw new TypeError((0, errorMessage_1.errorMessage)(a, b));
    }
};
