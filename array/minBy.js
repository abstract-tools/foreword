const curry = require('../function/curry')

// minBy :: (a -> b) -> Array a -> Maybe a
function minBy (f, arr = []) {
  return [...arr].sort((a, b) => {
    const x = f(a)
    const y = f(b)

    return (x > y) ? 1 : (x < y) ? -1 : 0
  })[0]
}

module.exports = curry(2, minBy)
