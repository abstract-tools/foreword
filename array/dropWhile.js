const curry = require('../function/curry')

// dropWhile :: (a -> Boolean) -> Array a -> Array a
function dropWhile (f, arr = []) {
  const i = arr.findIndex(x => !f(x))

  return i < 0 ? [] : arr.slice(i)
}

module.exports = curry(2, dropWhile)
