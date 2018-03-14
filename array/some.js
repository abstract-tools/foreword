const curry = require('../function/curry');

// some :: (a -> Boolean) -> Array a -> Boolean
module.exports = curry(2, (f, arr = []) => {
  return arr.some(f);
});
