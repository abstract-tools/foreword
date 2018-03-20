const curry = require('../function/curry')

// pow :: Number -> Number -> Number
function pow (a = 0, b = 0) {
  return Math.pow(b, a)
}

module.exports = curry(2, pow)
