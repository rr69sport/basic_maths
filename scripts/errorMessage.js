const errorMessage = (a, b) => {

    if (typeof a !== 'number') {

        console.error(`"${a}" is not a number`);

    }
    if (typeof b !== 'number') {

        console.error(`"${b}" is not a number`);

    }
    return false;

};

module.exports = errorMessage;