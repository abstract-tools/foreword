const curry = require('../function/curry')

// mod :: Number -> Number -> Number
function mod (a = 0, b = 0) {
  return ((a % b) + b) % b
}

module.exports = curry(2, mod)
