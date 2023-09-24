const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((accu, item) => accu + item,0);
};

const multiply = function(a, ...b) {
  let result = a;
  for (let arg of b) {
    result *= arg;
  };
  return result;
};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(a) {
  let arr = [];
	for (let i = a; i > 0; i--) {
    arr.push(i);
  }
  return arr.reduce((accu, item) => accu * item, 1);
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
