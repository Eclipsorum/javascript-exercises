const palindromes = function (str) {
    const strReverse = str.replace(/\W/g, '').toLowerCase().split('').reverse();
    return strReverse.every((item, index) =>  item === str.replace(/\W/g, '').toLowerCase().split('')[index]);
};

// Do not edit below this line
module.exports = palindromes;

