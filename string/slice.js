const curry = require('../function/curry')

function slice (a, b, str) {
  return str.slice(a, b)
}

module.exports = curry(3, slice)
