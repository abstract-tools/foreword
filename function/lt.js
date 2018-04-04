const curry = require('./curry')

function lt (a, b) {
  return b < a
}

module.exports = curry(2, lt)
