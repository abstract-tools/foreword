const curry = require('../function/curry')

function unless (f, g, a) {
  return f(a) ? a : g(a)
}

module.exports = curry(3, unless)
