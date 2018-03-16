const curry = require('../function/curry')

// ap :: Array (a -> b) -> Array a -> Array b
const ap = curry(2, function ap (fs = [], arr = []) {
  return fs.reduce((a, f) => {
    return a.concat(arr.map(f))
  }, [])
})

module.exports = ap
