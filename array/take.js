const curry = require('../function/curry');

// take :: Number -> Array a -> Array a
module.exports = curry(2, (n = Infinity, arr = []) => {
  return arr.slice(0, n);
});
