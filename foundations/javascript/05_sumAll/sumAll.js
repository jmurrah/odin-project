const sumAll = function(n1, n2) {
    if (n1 < 0 || n2 < 0 || typeof n1 !== 'number' || typeof n2 !== 'number') {
        return 'ERROR';
    } else if (n1 > n2) {
        [n1, n2] = [n1, n2].reverse();
    }

    sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum += i;
    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
