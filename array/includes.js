const curry = require('../function/curry');

// includes :: a -> Array a -> Boolean
module.exports = curry(2, (a, arr = []) => {
  return arr.includes(a);
});
