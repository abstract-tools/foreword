const curry = require('../function/curry')

// either :: (a -> Boolean) -> (a -> Boolean) -> a -> Boolean
function either (f, g, a) {
  return f(a) || g(a)
}

module.exports = curry(3, either)
