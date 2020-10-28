const validatePow = (a, b) => {

    if (a === 0) return a;
    if (b === 0) return 1;
    return a ** b;

};

module.exports = validatePow;