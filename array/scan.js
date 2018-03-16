const curry = require('../function/curry')

// scan :: (a -> b -> b) -> b -> Array a -> Array b
const scan = curry(3, function scan (f, init, arr = []) {
  return arr.reduce((a, b) => {
    return a.concat(f(a[a.length - 1], b))
  }, [init])
})

module.exports = scan
