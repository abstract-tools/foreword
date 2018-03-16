const curry = require('../function/curry')

// partition :: (a -> Boolean) -> Array a -> Array (a, a)
const partition = curry(2, function partition (f, arr = []) {
  return arr.reduce(([x, y], b) => {
    return f(b) ? [[...x, b], y] : [x, [...y, b]]
  }, [[], []])
})

module.exports = partition
