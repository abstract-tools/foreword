const curry = require('../function/curry');

// sort :: ((a, a) -> Number) -> Array a -> Array a
module.exports = curry(2, (f, arr = []) => {
  return arr.concat().sort(f);
});
