const curry = require('../function/curry');

// append :: Array a -> Array a -> Array a
module.exports = curry(2, (a, b) => {
  return b.concat(a);
});
