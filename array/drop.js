const curry = require('../function/curry');

// drop :: Number -> Array a -> Array a
module.exports = curry(2, (n = 0, arr = []) => {
  return arr.slice(n, Infinity);
});
