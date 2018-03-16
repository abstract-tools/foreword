const curry = require('../function/curry')

// append :: Array a -> Array a -> Array a
const append = curry(2, function append (a = [], b = []) {
  return b.concat(a)
})

module.exports = append
