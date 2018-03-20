const curry = require('../function/curry')

// filter :: (a -> Boolean) -> Array a -> Array a
function filter (f, arr = []) {
  return arr.filter(f)
}

module.exports = curry(2, filter)
