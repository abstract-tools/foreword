const curry = require('./curry');

// withDefault :: a -> Maybe a -> a
module.exports = curry((a, b) => {
  return (b == null) ? a : b;
});
