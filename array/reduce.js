const curry = require('../function/curry')

// reduce :: (a -> b -> b) -> b -> Array a -> b
function reduce (f, init, arr = []) {
  return arr.reduce(f, init)
}

module.exports = curry(2, reduce)
