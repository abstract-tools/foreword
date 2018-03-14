const curry = require('../function/curry');

// max :: Number -> Number -> Number
module.exports = curry(2, (a = 0, b = 0) => {
  return Math.max(a, b);
});
