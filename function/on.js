const curry = require('../function/curry')

// on :: (b -> b -> c) -> (a -> b) -> a -> a -> c
const on = curry(4, function on (f, g, a, b) {
  return f(g(a), g(b))
})

module.exports = on
