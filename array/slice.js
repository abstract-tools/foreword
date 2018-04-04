const curry = require('../function/curry')

function slice (a = 0, b = Infinity, arr = []) {
  return arr.slice(a, b)
}

module.exports = curry(3, slice)
