const curry = require('../function/curry');

// take :: Number -> Array a -> Array a
const take = curry(2, function take (n = Infinity, arr = []) {
  return arr.slice(0, n);
});

module.exports = take;
