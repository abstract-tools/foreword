const curry = require('../function/curry')

function uniqueBy (f, arr) {
  return Object.values(arr.reduce((a, b) => {
    const k = f(b)

    return a[k] ? a : Object.assign(a, {
      [k]: b
    })
  }, {}))
}

module.exports = curry(2, uniqueBy)
