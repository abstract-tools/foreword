const curry = require('../function/curry')

// map :: (a -> b) -> Array a -> Array b
function map (f, arr = []) {
  return arr.map(f)
}

module.exports = curry(2, map)
