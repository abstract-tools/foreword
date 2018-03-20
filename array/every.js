const curry = require('../function/curry')

// every :: (a -> Boolean) -> Array a -> Boolean
function every (f, arr = []) {
  return arr.every(f)
}

module.exports = curry(2, every)
