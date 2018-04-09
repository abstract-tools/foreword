const curry = require('../function/curry')

function multiply (a, b) {
  return a * b
}

module.exports = curry(2, multiply)
