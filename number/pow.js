const curry = require('../function/curry')

// pow :: Number -> Number -> Number
const pow = curry(2, function pow (a = 0, b = 0) {
  return Math.pow(b, a)
})

module.exports = pow
