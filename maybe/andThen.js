const curry = require('../function/curry')

// andThen :: (a -> Maybe b) -> Maybe a -> Maybe b
function andThen (f, a) {
  return (a == null) ? a : f(a)
}

module.exports = curry(2, andThen)
