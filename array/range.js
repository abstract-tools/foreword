const curry = require('../function/curry')

// range :: Number -> Number -> Array Number
function range (a = 0, b = 0) {
  return Array(b).fill(0).map((_, i) => i).slice(a)
}

module.exports = curry(2, range)
