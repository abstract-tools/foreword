const curry = require('../function/curry')

// map :: (a -> b) -> Maybe a -> Maybe b
function map (f, a) {
  return a == null ? a : f(a)
}

module.exports = curry(2, map)
