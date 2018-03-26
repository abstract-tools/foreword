const curry = require('../function/curry')

// range :: Number -> Number -> Array Number
function range (a, b) {
  return Array(b).fill(0).map((_, i) => i).slice(a)
}

module.exports = range
