"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMessage = void 0;
var errorMessage = function (a, b) {
    if (typeof a !== 'number' && typeof b !== 'number')
        return "\"".concat(a, "\" and \"").concat(b, "\" most be a number");
    if (typeof a !== 'number')
        return "\"".concat(a, "\" is not a number");
    return "\"".concat(b, "\" is not a number");
};
exports.errorMessage = errorMessage;
