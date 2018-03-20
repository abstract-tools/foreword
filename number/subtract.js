const curry = require('../function/curry')

// subtract :: Number -> Number -> Number
function subtract (a = 0, b = 0) {
  return b - a
}

module.exports = curry(2, subtract)
