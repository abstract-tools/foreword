const curry = require('../function/curry')

// range :: Number -> Number -> Array Number
function range (a = 0, b = 0) {
  const arr = []

  for (let i = a, len = b; i < b; i++) {
    arr.push(i)
  }

  return arr
}

module.exports = curry(2, range)
