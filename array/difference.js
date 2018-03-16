const curry = require('../function/curry')

// difference :: Array a -> Array a -> Array a
const difference = curry(2, function difference (a = [], b = []) {
  return a.filter(x => !b.includes(x))
})

module.exports = difference
