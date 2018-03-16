const curry = require('../function/curry')

// union :: Array a -> Array a -> Array a
const union = curry(2, function union (a = [], b = []) {
  return a.concat(b).reduce((x, y) => {
    return x.includes(y) ? x : x.concat(y)
  }, [])
})

module.exports = union
