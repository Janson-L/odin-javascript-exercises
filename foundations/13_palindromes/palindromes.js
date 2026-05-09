const palindromes = function (input) {
    let filtered = String(input).toUpperCase().match(/[\d\w]+/gm)?.join('') || '';
    let reversed = filtered.split("").reverse().join("");


    return filtered === reversed
};

// Do not edit below this line
module.exports = palindromes;
