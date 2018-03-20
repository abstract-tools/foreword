const curry = require('./curry')

// lt :: a -> a -> Boolean
function lt (a, b) {
  return b < a
}

module.exports = curry(2, lt)
