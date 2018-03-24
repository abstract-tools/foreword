const curry = require('../function/curry')

// reject :: (a -> Boolean) -> Array a -> Array a
function reject (f, arr = []) {
  return arr.filter(v => !f(v))
}

module.exports = curry(2, reject)
