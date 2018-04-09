const curry = require('../function/curry')

function slice (a, b, arr) {
  return arr.slice(a, b)
}

module.exports = curry(3, slice)
