const curry = require('../function/curry')

// divide :: Number -> Number -> Number
function divide (a = 0, b = 0) {
  return b / a
}

module.exports = curry(2, divide)
