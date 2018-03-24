const curry = require('./curry')

// pipe :: Array (a -> b) -> a -> b
function pipe (arr = [], a) {
  return arr.reduce((v, f) => f(v), a)
}

module.exports = curry(2, pipe)
