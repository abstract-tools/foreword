const curry = require('../function/curry')

// add :: Number -> Number -> Number
function add (a = 0, b = 0) {
  return a + b
}

module.exports = curry(2, add)
