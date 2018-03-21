const curry = require('../function/curry')

// span :: (String -> Boolean) -> String a -> Array (String, String)
function span (f, str = '') {
  const idx = Array.from(str).findIndex(a => !f(a))
  const n = idx < 0 ? Infinity : idx

  return [str.slice(0, n), str.slice(n)]
}

module.exports = curry(2, span)
