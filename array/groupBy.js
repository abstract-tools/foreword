const curry = require('../function/curry')

// groupBy :: (a -> b) -> Array a -> Object k (Array a)
const groupBy = curry(2, function groupBy (f, arr = []) {
  return arr.reduce((a, b) => {
    const k = f(b)

    return Object.assign(a, {
      [k]: a[k] ? a[k].concat(b) : [b]
    })
  }, {})
})

module.exports = groupBy
