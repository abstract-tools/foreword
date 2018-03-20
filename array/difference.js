const curry = require('../function/curry')

// difference :: Array a -> Array a -> Array a
function difference (a = [], b = []) {
  return a.filter(x => !b.includes(x))
}

module.exports = curry(2, difference)
