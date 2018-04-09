const curry = require('../function/curry')

function min (a, b) {
  return a > b ? b : a
}

module.exports = curry(2, min)
