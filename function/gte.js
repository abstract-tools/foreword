const curry = require('./curry')

// gte :: a -> a -> Boolean
function gte (a, b) {
  return b >= a
}

module.exports = curry(2, gte)
