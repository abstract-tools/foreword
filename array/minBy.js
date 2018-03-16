const curry = require('../function/curry')

// minBy :: (a -> b) -> Array a -> Maybe a
const minBy = curry(2, function minBy (f, arr = []) {
  return arr.concat().sort((a, b) => {
    const x = f(a)
    const y = f(b)

    return (x > y) ? 1 : (x < y) ? -1 : 0
  })[0]
})

module.exports = minBy
