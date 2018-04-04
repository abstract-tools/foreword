const curry = require('./curry')

function or (a, b) {
  return a || b
}

module.exports = curry(2, or)
