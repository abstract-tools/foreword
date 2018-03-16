const curry = require('../function/curry')

// when :: (a -> Boolean) -> (a -> b) -> a -> b
const when = curry(3, function when (f, g, a) {
  return f(a) ? g(a) : a
})

module.exports = when
