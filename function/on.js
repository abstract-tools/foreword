const curry = require('../function/curry')

// on :: (b -> b -> c) -> (a -> b) -> a -> a -> c
function on (f, g, a, b) {
  return f(g(a), g(b))
}

module.exports = curry(4, on)
