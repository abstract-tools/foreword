const curry = require('../function/curry')

// min :: Number -> Number -> Number
function min (a = 0, b = 0) {
  return a > b ? b : a
}

module.exports = curry(2, min)
