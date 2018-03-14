const curry = require('../function/curry');

// slice :: Number -> Number -> Array a -> Array a
const slice = curry(3, function slice (a = 0, b = Infinity, arr = []) {
  return arr.slice(a, b);
});

module.exports = slice;
