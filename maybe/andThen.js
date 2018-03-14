const curry = require('../function/curry');

// andThen :: (a -> Maybe b) -> Maybe a -> Maybe b
const andThen = curry(2, function andThen (f, a) {
  return (a == null) ? a : f(a);
});

module.exports = andThen;
