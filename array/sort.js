const curry = require('../function/curry');

// sort :: ((a, a) -> Number) -> Array a -> Array a
const sort = curry(2, function sort (f = x => x, arr = []) {
  return arr.concat().sort(f);
});

module.exports = sort;
