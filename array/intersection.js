const curry = require('../function/curry')

// intersection :: Array a -> Array a -> Array a
const intersection = curry(2, function intersection (a = [], b = []) {
  return a.filter(x => b.includes(x))
})

module.exports = intersection
