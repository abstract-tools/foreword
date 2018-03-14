const curry = require('../function/curry');

// filter :: (a -> Boolean) -> Array a -> Array a
const filter = curry(2, function filter (f = x => x, arr = []) {
  return arr.filter(f);
});

module.exports = filter;
