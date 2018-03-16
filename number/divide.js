const curry = require('../function/curry')

// divide :: Number -> Number -> Number
const divide = curry(2, function divide (a = 0, b = 0) {
  return b / a
})

module.exports = divide
