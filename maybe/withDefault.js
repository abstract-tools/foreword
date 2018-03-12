const curry = require('../function/curry');

// withDefault :: a -> Maybe a -> a
module.exports = curry((a, b) => {
  return (b == null) ? a : b;
});
