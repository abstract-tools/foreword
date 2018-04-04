const curry = require('./curry')

function and (a, b) {
  return a && b
}

module.exports = curry(2, and)
