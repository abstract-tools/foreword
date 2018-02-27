const curry = require('../function/curry');

// sub :: Number -> Number -> Number
module.exports = curry((a, b) => {
  return b - a;
});
