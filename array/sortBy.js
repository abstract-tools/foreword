const curry = require('../function/curry')

// sortBy :: (a -> b) -> Array a -> Array a
function sortBy (f, arr = []) {
  return [...arr].sort((a, b) => {
    const x = f(a)
    const y = f(b)

    return (x < y) ? -1 : (x > y) ? 1 : 0
  })
}

module.exports = curry(2, sortBy)
