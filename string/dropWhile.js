const curry = require('../function/curry')

// dropWhile :: (String -> Boolean) -> String -> String
function dropWhile (f, str = '') {
  const idx = Array.from(str).findIndex(x => !f(x))

  return str.slice((idx < 0) ? Infinity : idx)
}

module.exports = curry(2, dropWhile)
