const curry = require('../function/curry')

function min (a = 0, b = 0) {
  return a > b ? b : a
}

module.exports = curry(2, min)
