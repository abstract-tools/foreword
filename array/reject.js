const curry = require('../function/curry')

// reject :: (a -> Boolean) -> Array a -> Array a
function reject (f, arr = []) {
  return arr.filter(a => !f(a))
}

module.exports = curry(2, reject)
