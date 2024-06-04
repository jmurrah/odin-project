const removeFromArray = function(arr, ...valuesToRemove) {
    return arr.filter((currentVal) => {
        return !valuesToRemove.includes(currentVal);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
