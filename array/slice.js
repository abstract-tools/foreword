const curry = require('../function/curry')

// slice :: Number -> Number -> Array a -> Array a
function slice (a = 0, b = Infinity, arr = []) {
  return arr.slice(a, b)
}

module.exports = curry(3, slice)
