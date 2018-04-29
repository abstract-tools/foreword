const curry = require('./curry')

function pipe (arr, init) {
  return arr.reduce((a, f) => f(a), init)
}

module.exports = curry(2, pipe)
