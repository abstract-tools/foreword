const curry = require('../function/curry');

// every :: (a -> Boolean) -> Array a -> Boolean
module.exports = curry((f, arr) => {
  return arr.every(f);
});
