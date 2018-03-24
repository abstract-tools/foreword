const curry = require('../function/curry')

// partition :: (a -> Boolean) -> Array a -> Array (a, a)
function partition (f, arr = []) {
  return arr.reduce(([x, y], v) => {
    return f(v) ? [[...x, v], y] : [x, [...y, v]]
  }, [[], []])
}

module.exports = curry(2, partition)
