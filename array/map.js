const curry = require('../function/curry');

// map :: (a -> b) -> Array a -> Array b
module.exports = curry(2, (f, arr = []) => {
  return arr.map(f);
});
