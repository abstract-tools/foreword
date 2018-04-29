const curry = require('../function/curry')

function concatMap (f, arr) {
  return arr.reduce((a, b) => {
    return a.concat(f(b))
  }, [])
}

module.exports = curry(2, concatMap)
