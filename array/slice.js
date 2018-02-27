const curry = require('../function/curry');

// slice :: Number -> Number -> Array a -> Array a
module.exports = curry((a, b, arr) => {
  return arr.slice(a, b);
});
