const curry = require('../function/curry')

// unless :: (a -> Boolean) -> (a -> b) -> a -> b
function unless (f, g, a) {
  return !f(a) ? g(a) : a
}

module.exports = curry(3, unless)
