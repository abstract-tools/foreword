const curry = require('../function/curry')

function clamp (a = 0, b = 0, c = 0) {
  return c < a ? a : c > b ? b : c
}

module.exports = curry(3, clamp)
