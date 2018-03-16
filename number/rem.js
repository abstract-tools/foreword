const curry = require('../function/curry')

// rem :: Number -> Number -> Number
const rem = curry(2, function rem (a = 0, b = 0) {
  return b % a
})

module.exports = rem
