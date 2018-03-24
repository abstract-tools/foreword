const curry = require('../function/curry')

// maxBy :: (a -> b) -> Array a -> Maybe a
function maxBy (f, arr = []) {
  return arr.reduce((a, b) => f(a) >= f(b) ? a : b)
}

module.exports = curry(2, maxBy)
