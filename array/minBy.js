const curry = require('../function/curry')

function minBy (f, arr = []) {
  return arr.reduce((a, b) => f(a) <= f(b) ? a : b)
}

module.exports = curry(2, minBy)
