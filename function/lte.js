const curry = require('./curry')

// lte :: a -> a -> Boolean
function lte (a, b) {
  return b <= a
}

module.exports = curry(2, lte)
