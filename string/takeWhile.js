const curry = require('../function/curry')

// takeWhile :: (String -> Boolean) -> String -> String
function takeWhile (f, str = '') {
  return str.slice(0, Array.from(str).findIndex(a => !f(a)))
}

module.exports = curry(2, takeWhile)
