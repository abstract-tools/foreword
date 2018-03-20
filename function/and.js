const curry = require('./curry')

// and :: Boolean -> Boolean -> Boolean
function and (a, b) {
  return a && b
}

module.exports = curry(2, and)
