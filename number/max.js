const curry = require('../function/curry')

function max (a = 0, b = 0) {
  return a > b ? a : b
}

module.exports = curry(2, max)
