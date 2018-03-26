const curry = require('./curry')

// pipe :: Array (a -> b) -> a -> b
function pipe (arr = [], init) {
  return arr.reduce((v, f) => f(v), init)
}

module.exports = curry(2, pipe)
