const curry = require('../function/curry');

// find :: (a -> Boolean) -> Array a -> Maybe a
module.exports = curry((f, arr) => {
  return arr.find(f);
});
