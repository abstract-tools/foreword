const curry = require('../function/curry');

// take :: Number -> Array a -> Array a
module.exports = curry((n, arr) => {
  return arr.slice(0, n);
});
