const curry = require('./curry')

// apply :: (a -> b) -> a -> b
const apply = curry(2, function apply (f, a) {
  return f(a)
})

module.exports = apply
