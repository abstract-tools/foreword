const curry = require('./curry')

function pipe (arr, init) {
  return arr.reduce((acc, f) => f(acc), init)
}

module.exports = curry(2, pipe)
