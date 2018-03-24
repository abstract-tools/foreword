const curry = require('../function/curry')

// difference :: Array a -> Array a -> Array a
function difference (a = [], b = []) {
  return a.filter(v => !b.includes(v))
}

module.exports = curry(2, difference)
