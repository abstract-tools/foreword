const curry = require('../function/curry')

// min :: Number -> Number -> Number
function min (a = 0, b = 0) {
  return Math.min(a, b)
}

module.exports = curry(2, min)
