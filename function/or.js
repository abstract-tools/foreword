const curry = require('./curry')

// or :: Boolean -> Boolean -> Boolean
function or (a, b) {
  return a || b
}

module.exports = curry(2, or)
