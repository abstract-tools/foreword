const curry = require('../function/curry');

// andThen :: (a -> Maybe b) -> Maybe a -> Maybe b
module.exports = curry(2, (f, a) => {
  return (a == null) ? a : f(a);
});
