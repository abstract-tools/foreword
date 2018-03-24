const curry = require('../function/curry')

// intersection :: Array a -> Array a -> Array a
function intersection (a = [], b = []) {
  return a.filter(v => b.includes(v))
}

module.exports = curry(2, intersection)
