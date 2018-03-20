const curry = require('../function/curry')

// takeWhile :: (String -> Boolean) -> String -> String
function takeWhile (f, str = '') {
  const idx = Array.from(str).findIndex(x => !f(x))

  return str.slice(0, (idx < 0) ? Infinity : idx)
}

module.exports = curry(2, takeWhile)
