const curry = require('../function/curry')

// minBy :: (a -> b) -> Array a -> Maybe a
function minBy (f, arr = []) {
  return arr.reduce((a, b) => f(b) < f(a) ? b : a)
}

module.exports = curry(2, minBy)
