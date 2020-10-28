const validateNumbers = (a, b) => {

    if (typeof a === 'number' && typeof b === 'number') {

        return true;

    }
    return false;

};

module.exports = validateNumbers;