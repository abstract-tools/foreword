const curry = require('../function/curry')

function pow (a, b) {
  return Math.pow(b, a)
}

module.exports = curry(2, pow)
