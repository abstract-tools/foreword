const curry = require('../function/curry');

// every :: (a -> Boolean) -> Array a -> Boolean
module.exports = curry(2, (f, arr = []) => {
  return arr.every(f);
});
