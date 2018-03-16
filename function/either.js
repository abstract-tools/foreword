const curry = require('../function/curry')

// either :: (a -> Boolean) -> (a -> Boolean) -> a -> Boolean
const either = curry(3, function either (f, g, a) {
  return f(a) || g(a)
})

module.exports = either
