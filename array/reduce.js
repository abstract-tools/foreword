const curry = require('../function/curry');

// reduce :: (a -> b -> b) -> b -> Array a -> b
module.exports = curry(3, (f, init, arr = []) => {
  return arr.reduce(f, init);
});
