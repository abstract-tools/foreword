const curry = require('../function/curry')

function when (f, g, a) {
  return f(a) ? g(a) : a
}

module.exports = curry(3, when)
