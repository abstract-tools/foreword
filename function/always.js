const curry = require('./curry')

// always :: a -> b -> a
function always (a, b) {
  return a
}

module.exports = curry(2, always)
