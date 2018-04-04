const curry = require('./curry')

function lte (a, b) {
  return b <= a
}

module.exports = curry(2, lte)
