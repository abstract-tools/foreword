const curry = require('../function/curry')

function groupBy (f, arr) {
  return arr.reduce((acc, a) => {
    const k = f(a)

    return Object.assign(acc, {
      [k]: acc.hasOwnProperty(k) ? [...acc[k], a] : [a]
    })
  }, {})
}

module.exports = curry(2, groupBy)
