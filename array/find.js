const curry = require('../function/curry');

// find :: (a -> Boolean) -> Array a -> Maybe a
module.exports = curry(2, (f, arr = []) => {
  return arr.find(f);
});
