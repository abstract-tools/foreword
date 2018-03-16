const curry = require('../function/curry')

// clamp :: Number -> Number -> Number -> Number
const clamp = curry(3, function clamp (a = 0, b = 0, c = 0) {
  if (c < a) {
    return a
  }

  if (c > b) {
    return b
  }

  return c
})

module.exports = clamp
