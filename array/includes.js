const curry = require('../function/curry');

// includes :: a -> Array a -> Boolean
module.exports = curry((a, arr) => {
  return arr.includes(a);
});
