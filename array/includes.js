const curry = require('../function/curry');

// includes :: a -> Array a -> Boolean
const includes = curry(2, function includes (a, arr = []) {
  return arr.includes(a);
});

module.exports = includes;
