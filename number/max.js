const curry = require('../function/curry')

// max :: Number -> Number -> Number
function max (a = 0, b = 0) {
  return Math.max(a, b)
}

module.exports = curry(2, max)
