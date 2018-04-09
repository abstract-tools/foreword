const curry = require('../function/curry')

function subtract (a, b) {
  return b - a
}

module.exports = curry(2, subtract)
