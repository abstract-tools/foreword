const curry = require('../function/curry');

// max :: Number -> Number -> Number
const max = curry(2, function max (a = 0, b = 0) {
  return Math.max(a, b);
});

module.exports = max;
