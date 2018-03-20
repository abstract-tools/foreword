const curry = require('./curry')

// apply :: (a -> b) -> a -> b
function apply (f, a) {
  return f(a)
}

module.exports = curry(2, apply)
