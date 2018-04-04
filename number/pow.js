const curry = require('../function/curry')

function pow (a = 0, b = 0) {
  return Math.pow(b, a)
}

module.exports = curry(2, pow)
