const curry = require('../function/curry')

function map (f, a) {
  return a == null ? a : f(a)
}

module.exports = curry(2, map)
