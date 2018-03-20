const curry = require('../function/curry')

// when :: (a -> Boolean) -> (a -> b) -> a -> b
function when (f, g, a) {
  return f(a) ? g(a) : a
}

module.exports = curry(3, when)
