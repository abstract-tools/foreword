const curry = require('../function/curry')

// some :: (a -> Boolean) -> Array a -> Boolean
function some (f, arr = []) {
  return arr.some(f)
}

module.exports = curry(2, some)
