const curry = require('../function/curry')

// dropWhile :: (String -> Boolean) -> String -> String
function dropWhile (f, str = '') {
  return str.slice(Array.from(str).findIndex(a => !f(a)))
}

module.exports = curry(2, dropWhile)
