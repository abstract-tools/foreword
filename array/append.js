const curry = require('../function/curry');

// append :: Array a -> Array a -> Array a
module.exports = curry((a, b) => {
  return b.concat(a);
});
