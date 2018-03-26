const curry = require('./curry')

// apply :: (a -> b) -> a -> b
function apply (f, ...args) {
  return f(...args)
}

module.exports = curry(2, apply)
