const curry = require('../function/curry')

// either :: (a -> Boolean) -> (a -> Boolean) -> a -> Boolean
function either (f, g, ...args) {
  return f(...args) || g(...args)
}

module.exports = curry(3, either)
