const curry = require('../function/curry');

// sort :: ((a, a) -> Number) -> Array a -> Array a
module.exports = curry((f, arr) => {
  return arr.concat().sort(f);
});
