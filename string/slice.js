const curry = require('../function/curry')

// slice :: Number -> Number -> String -> String
const slice = curry(3, function slice (a = 0, b = Infinity, str = '') {
  return str.slice(a, b)
})

module.exports = slice
