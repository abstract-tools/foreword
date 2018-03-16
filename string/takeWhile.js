const curry = require('../function/curry')

// takeWhile :: (String -> Boolean) -> String -> String
const takeWhile = curry(2, function takeWhile (f, str = '') {
  return str.slice(0, Array.from(str).findIndex(a => !f(a)))
})

module.exports = takeWhile
