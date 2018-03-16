const curry = require('../function/curry')

// mod :: Number -> Number -> Number
const mod = curry(2, function mod (a = 0, b = 0) {
  return ((a % b) + b) % b
})

module.exports = mod
