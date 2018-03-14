const curry = require('../function/curry');

// filter :: (a -> Boolean) -> Array a -> Array a
module.exports = curry(2, (f, arr = []) => {
  return arr.filter(f);
});
