const curry = require('./curry')

function always (a, b) {
  return a
}

module.exports = curry(2, always)
