const curry = require('../function/curry')

function scan (f, init, arr = []) {
  return arr.reduce((a, b) => {
    return [...a, f(a[a.length - 1], b)]
  }, [init])
}

module.exports = curry(3, scan)
