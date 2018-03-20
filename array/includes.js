const curry = require('../function/curry')

// includes :: a -> Array a -> Boolean
function includes (a, arr = []) {
  return arr.includes(a)
}

module.exports = curry(2, includes)
