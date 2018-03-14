const curry = require('../function/curry');

// subtract :: Number -> Number -> Number
const subtract = curry(2, function subtract (a = 0, b = 0) {
  return b - a;
});

module.exports = subtract;
