const curry = require('../function/curry')

// both :: (a -> Boolean) -> (a -> Boolean) -> a -> Boolean
const both = curry(3, function both (f, g, a) {
  return f(a) && g(a)
})

module.exports = both
