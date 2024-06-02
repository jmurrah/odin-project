const removeFromArray = function(arr, valueToRemove) {
    return arr.filter(function(currentVal) {
        return currentVal !== valueToRemove;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
