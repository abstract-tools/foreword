const curry = require('../function/curry')

function max (a, b) {
  return a > b ? a : b
}

module.exports = curry(2, max)
