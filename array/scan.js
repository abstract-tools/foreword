const curry = require('../function/curry')

function scan (f, init, arr) {
  return arr.reduce((acc, a) => {
    return [...acc, f(acc[acc.length - 1], a)]
  }, [init])
}

module.exports = curry(3, scan)
