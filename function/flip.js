const curry = require('./curry')

// flip : (a -> b -> c) -> b -> a -> c
function flip (f, a, b) {
  return f(b, a)
}

module.exports = curry(3, flip)
