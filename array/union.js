const curry = require('../function/curry')

// union :: Array a -> Array a -> Array a
function union (a = [], b = []) {
  return [...a, ...b].reduce((x, y) => {
    return x.includes(y) ? x : [...x, y]
  }, [])
}

module.exports = curry(2, union)
