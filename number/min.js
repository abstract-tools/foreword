const curry = require('../function/curry');

// min :: Number -> Number -> Number
const min = curry(2, function min (a = 0, b = 0) {
  return Math.min(a, b);
});

module.exports = min;
