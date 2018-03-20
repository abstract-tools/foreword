const curry = require('../function/curry')

// sort :: ((a, a) -> Number) -> Array a -> Array a
function sort (f, arr = []) {
  return [...arr].sort(f)
}

module.exports = curry(2, sort)
