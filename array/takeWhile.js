const curry = require('../function/curry')

// takeWhile :: (a -> Boolean) -> Array a -> Array a
const takeWhile = curry(2, function takeWhile (f, arr = []) {
  return arr.slice(0, arr.findIndex(a => !f(a)))
})

module.exports = takeWhile
