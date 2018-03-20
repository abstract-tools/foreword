const curry = require('../function/curry')

// takeWhile :: (a -> Boolean) -> Array a -> Array a
function takeWhile (f, arr = []) {
  const idx = arr.findIndex(x => !f(x))

  return arr.slice(0, (idx < 0) ? Infinity : idx)
}

module.exports = curry(2, takeWhile)
