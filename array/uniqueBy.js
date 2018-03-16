const curry = require('../function/curry')

// uniqueBy :: (a -> b) -> Array a -> Array a
const uniqueBy = curry(2, function uniqueBy (f, arr = []) {
  return arr.reduce((a, b) => {
    return a.map(f).includes(f(b)) ? a : a.concat(b)
  }, [])
})

module.exports = uniqueBy
