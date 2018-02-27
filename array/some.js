const curry = require('../function/curry');

// some :: (a -> Boolean) -> Array a -> Boolean
module.exports = curry((f, arr) => {
  return arr.some(f);
});
