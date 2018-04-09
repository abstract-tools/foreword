const curry = require('../function/curry')

function clamp (a, b, c) {
  return c < a ? a : c > b ? b : c
}

module.exports = curry(3, clamp)
