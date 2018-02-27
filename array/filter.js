const curry = require('../function/curry');

// filter :: (a -> Boolean) -> Array a -> Array a
module.exports = curry((f, arr) => {
  return arr.filter(f);
});
