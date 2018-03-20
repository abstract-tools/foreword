const curry = require('../function/curry')

// append :: Array a -> Array a -> Array a
function append (a = [], b = []) {
  return b.concat(a)
}

module.exports = curry(2, append)
