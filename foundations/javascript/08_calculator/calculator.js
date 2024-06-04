const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
	return arr.reduce((s, c) => s + c, 0);
};

const multiply = function(arr) {
  return arr.reduce((s, c) => s * c, 1);
};

const power = function(n, p) {
	return n ** p;
};

const factorial = function(n) {
  return n > 1 ? n * factorial(n - 1) : 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
