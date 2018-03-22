const curry = require('../function/curry')

// dropWhile :: (a -> Boolean) -> Array a -> Array a
function dropWhile (f, arr = []) {
  const i = arr.findIndex(x => !f(x))

  return arr.slice(i < 0 ? Infinity : i)
}

module.exports = curry(2, dropWhile)
