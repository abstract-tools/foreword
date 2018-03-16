const curry = require('../function/curry')

// dropWhile :: (String -> Boolean) -> String -> String
const dropWhile = curry(2, function dropWhile (f, str = '') {
  return str.slice(Array.from(str).findIndex(a => !f(a)))
})

module.exports = dropWhile
