const curry = require('../function/curry')

// withDefault :: a -> Maybe a -> a
function withDefault (a, b) {
  return (b == null) ? a : b
}

module.exports = curry(2, withDefault)
