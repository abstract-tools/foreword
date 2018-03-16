const curry = require('../function/curry')

// reduce :: (a -> b -> b) -> b -> Array a -> b
const reduce = curry(3, function reduce (f, init, arr = []) {
  return arr.reduce(f, init)
})

module.exports = reduce
