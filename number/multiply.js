const curry = require('../function/curry')

// multiply :: Number -> Number -> Number
const multiply = curry(2, function multiply (a = 0, b = 0) {
  return a * b
})

module.exports = multiply
