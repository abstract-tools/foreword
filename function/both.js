const curry = require('../function/curry')

// both :: (a -> Boolean) -> (a -> Boolean) -> a -> Boolean
function both (f, g, a) {
  return f(a) && g(a)
}

module.exports = curry(3, both)
