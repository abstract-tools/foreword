const curry = require('../function/curry')

// dropWhile :: (a -> Boolean) -> Array a -> Array a
function dropWhile (f, arr = []) {
  return arr.slice(arr.findIndex(x => !f(x)))
}

module.exports = curry(2, dropWhile)
