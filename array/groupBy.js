const curry = require('../function/curry')

function groupBy (f, arr) {
  return arr.reduce((a, b) => {
    const k = f(b)

    return Object.assign(a, {
      [k]: a[k] ? [...a[k], b] : [b]
    })
  }, {})
}

module.exports = curry(2, groupBy)
