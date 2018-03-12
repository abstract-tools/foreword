const curry = require('../function/curry');

// andThen :: (a -> Maybe b) -> Maybe a -> Maybe b
module.exports = curry((f, a) => {
  return (a == null) ? a : f(a);
});
