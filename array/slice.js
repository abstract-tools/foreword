const curry = require('../function/curry');

// slice :: Number -> Number -> Array a -> Array a
module.exports = curry(3, (a = 0, b = Infinity, arr = []) => {
  return arr.slice(a, b);
});
