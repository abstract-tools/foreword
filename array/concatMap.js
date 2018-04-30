const curry = require('../function/curry')

function concatMap (f, arr) {
  return arr.reduce((acc, a) => {
    return acc.concat(f(a))
  }, [])
}

module.exports = curry(2, concatMap)
