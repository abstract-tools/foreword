const curry = require('./curry')

// pipe :: Array (a -> b) -> a -> b
function pipe (arr = [], a) {
  return arr.reduce((x, f) => f(x), a)
}

module.exports = curry(2, pipe)
