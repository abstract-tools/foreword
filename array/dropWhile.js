const curry = require('../function/curry')

// dropWhile :: (a -> Boolean) -> Array a -> Array a
function dropWhile (f, arr = []) {
  const idx = arr.findIndex(x => !f(x))

  return arr.slice(idx < 0 ? Infinity : idx)
}

module.exports = curry(2, dropWhile)
