const curry = require('../function/curry')

function uniqueBy (f, arr) {
  return Object.values(arr.reduce((acc, a) => {
    const k = f(a)

    return acc.hasOwnProperty(k) ? acc : Object.assign(acc, {
      [k]: a
    })
  }, {}))
}

module.exports = curry(2, uniqueBy)
