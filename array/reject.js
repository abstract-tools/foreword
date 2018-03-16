const curry = require('../function/curry')

// reject :: (a -> Boolean) -> Array a -> Array a
const reject = curry(2, function reject (f, arr = []) {
  return arr.filter(a => !f(a))
})

module.exports = reject
