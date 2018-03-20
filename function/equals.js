const curry = require('./curry')

// equals :: a -> a -> Boolean
function equals (a, b) {
  return a === b
}

module.exports = curry(2, equals)
