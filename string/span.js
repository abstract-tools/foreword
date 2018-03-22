const curry = require('../function/curry')

// span :: (String -> Boolean) -> String a -> Array (String, String)
function span (f, str = '') {
  const i = Array.from(str).findIndex(x => !f(x))
  const n = i < 0 ? Infinity : i

  return [str.slice(0, n), str.slice(n)]
}

module.exports = curry(2, span)
