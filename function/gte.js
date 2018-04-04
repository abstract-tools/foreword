const curry = require('./curry')

function gte (a, b) {
  return b >= a
}

module.exports = curry(2, gte)
