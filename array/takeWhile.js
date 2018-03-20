const curry = require('../function/curry')

// takeWhile :: (a -> Boolean) -> Array a -> Array a
function takeWhile (f, arr = []) {
  return arr.slice(0, arr.findIndex(a => !f(a)))
}

module.exports = curry(2, takeWhile)
