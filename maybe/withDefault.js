const curry = require('../function/curry')

// withDefault :: a -> Maybe a -> a
const withDefault = curry(2, function withDefault (a, b) {
  return (b == null) ? a : b
})

module.exports = withDefault
