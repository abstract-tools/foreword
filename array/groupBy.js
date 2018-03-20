const curry = require('../function/curry')

// groupBy :: (a -> b) -> Array a -> Object k (Array a)
function groupBy (f, arr = []) {
  return arr.reduce((a, b) => {
    const k = f(b)

    return Object.assign(a, {
      [k]: a[k] ? a[k].concat(b) : [b]
    })
  }, {})
}

module.exports = curry(2, groupBy)
