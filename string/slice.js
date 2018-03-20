const curry = require('../function/curry')

// slice :: Number -> Number -> String -> String
function slice (a = 0, b = Infinity, str = '') {
  return str.slice(a, b)
}

module.exports = curry(3, slice)
