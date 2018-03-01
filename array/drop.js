const curry = require('../function/curry');

// drop :: Number -> Array a -> Array a
module.exports = curry((n, arr) => {
  return arr.slice(n, Infinity);
});
