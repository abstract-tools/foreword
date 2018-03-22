const curry = require('../function/curry')

// takeWhile :: (String -> Boolean) -> String -> String
function takeWhile (f, str = '') {
  const i = Array.from(str).findIndex(x => !f(x))

  return str.slice(0, i < 0 ? Infinity : i)
}

module.exports = curry(2, takeWhile)
