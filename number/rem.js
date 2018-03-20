const curry = require('../function/curry')

// rem :: Number -> Number -> Number
function rem (a = 0, b = 0) {
  return b % a
}

module.exports = curry(2, rem)
