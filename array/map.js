const curry = require('../function/curry');

// map :: (a -> b) -> Array a -> Array b
const map = curry(2, function map (f, arr = []) {
  return arr.map(f);
});

module.exports = map;
