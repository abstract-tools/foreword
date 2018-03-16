const curry = require('../function/curry')

// add :: Number -> Number -> Number
const add = curry(2, function add (a = 0, b = 0) {
  return a + b
})

module.exports = add
