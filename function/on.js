const curry = require('../function/curry')

function on (f, g, a, b) {
  return f(g(a), g(b))
}

module.exports = curry(4, on)
