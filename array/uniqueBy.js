const curry = require('../function/curry')

// uniqueBy :: (a -> b) -> Array a -> Array a
function uniqueBy (f, arr = []) {
  return arr.reduce((a, b) => {
    return a.map(f).includes(f(b)) ? a : [...a, b]
  }, [])
}

module.exports = curry(2, uniqueBy)
