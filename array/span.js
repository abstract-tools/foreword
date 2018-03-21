const curry = require('../function/curry')

// span :: (a -> Boolean) -> Array a -> Array (a, a)
function span (f, arr = []) {
  const idx = arr.findIndex(a => !f(a))
  const n = idx < 0 ? Infinity : idx

  return [arr.slice(0, n), arr.slice(n)]
}

module.exports = curry(2, span)
