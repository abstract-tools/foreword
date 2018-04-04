const curry = require('./curry')

function equal (a, b) {
  return a === b
}

module.exports = curry(2, equal)
