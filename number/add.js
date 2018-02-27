const curry = require('../function/curry');

// add :: Number -> Number -> Number
module.exports = curry((a, b) => {
  return a + b;
});
