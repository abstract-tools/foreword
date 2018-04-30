const curry = require('../function/curry')

function countBy (f, arr) {
  return arr.reduce((acc, a) => {
    const k = f(a)

    return Object.assign(acc, {
      [k]: acc.hasOwnProperty(k) ? acc[k] + 1 : 1
    })
  }, {})
}

module.exports = curry(2, countBy)
