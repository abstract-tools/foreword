const curry = require('../function/curry');

// min :: Number -> Number -> Number
module.exports = curry(2, (a = 0, b = 0) => {
  return Math.min(a, b);
});
