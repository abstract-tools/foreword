const curry = require('../function/curry')

function multiply (a = 0, b = 0) {
  return a * b
}

module.exports = curry(2, multiply)
