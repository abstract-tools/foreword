const curry = require('../function/curry')

// partition :: (a -> Boolean) -> Array a -> Array (a, a)
function partition (f, arr = []) {
  return arr.reduce(([x, y], b) => {
    return f(b) ? [[...x, b], y] : [x, [...y, b]]
  }, [[], []])
}

module.exports = curry(2, partition)
