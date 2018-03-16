const curry = require('../function/curry')

// dropWhile :: (a -> Boolean) -> Array a -> Array a
const dropWhile = curry(2, function dropWhile (f, arr = []) {
  return arr.slice(arr.findIndex(x => !f(x)))
})

module.exports = dropWhile
