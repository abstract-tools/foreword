const curry = require('../function/curry')

// both :: (a -> Boolean) -> (a -> Boolean) -> a -> Boolean
function both (f, g, ...args) {
  return f(...args) && g(...args)
}

module.exports = curry(3, both)
