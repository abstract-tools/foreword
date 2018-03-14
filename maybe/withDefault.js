const curry = require('../function/curry');

// withDefault :: a -> Maybe a -> a
module.exports = curry(2, (a, b) => {
  return (b == null) ? a : b;
});
