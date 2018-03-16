const curry = require('../function/curry')

// span :: (String -> Boolean) -> String a -> Array (String, String)
const span = curry(2, function span (f, str = '') {
  const n = Array.from(str).findIndex(a => !f(a))

  return [str.slice(0, n), str.slice(n)]
})

module.exports = span
