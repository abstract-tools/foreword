const curry = require('../function/curry')

// maxBy :: (a -> b) -> Array a -> Maybe a
const maxBy = curry(2, function maxBy (f, arr = []) {
  return arr.concat().sort((a, b) => {
    const x = f(a)
    const y = f(b)

    return (x > y) ? -1 : (x < y) ? 1 : 0
  })[0]
})

module.exports = maxBy
