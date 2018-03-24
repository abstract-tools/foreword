const curry = require('../function/curry')

// takeWhile :: (a -> Boolean) -> Array a -> Array a
function takeWhile (f, arr = []) {
  const i = arr.findIndex(x => !f(x))

  return i < 0 ? arr : arr.slice(0, i)
}

module.exports = curry(2, takeWhile)
