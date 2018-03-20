const curry = require('../function/curry')

// drop :: Number -> Array a -> Array a
function drop (n = 0, arr = []) {
  return arr.slice(n, Infinity)
}

module.exports = curry(2, drop)
