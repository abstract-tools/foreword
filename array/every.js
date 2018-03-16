const curry = require('../function/curry')

// every :: (a -> Boolean) -> Array a -> Boolean
const every = curry(2, function every (f, arr = []) {
  return arr.every(f)
})

module.exports = every
