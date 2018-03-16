const curry = require('../function/curry')

// sortBy :: (a -> b) -> Array a -> Array a
const sortBy = curry(2, function sortBy (f, arr = []) {
  return arr.concat().sort((a, b) => {
    const x = f(a)
    const y = f(b)

    return (x < y) ? -1 : (x > y) ? 1 : 0
  })
})

module.exports = sortBy
