const palindromes = function (str) {
    const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return formattedStr === formattedStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
