const curry = require('../function/curry')

// span :: (a -> Boolean) -> Array a -> Array (a, a)
const span = curry(2, function span (f, arr = []) {
  const n = arr.findIndex(a => !f(a))

  return [arr.slice(0, n), arr.slice(n)]
})

module.exports = span
