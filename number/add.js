const curry = require('../function/curry');

// add :: Number -> Number -> Number
module.exports = curry(2, (a = 0, b = 0) => {
  return a + b;
});
