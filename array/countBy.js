const curry = require('../function/curry')

function countBy (f, arr) {
  return arr.reduce((a, b) => {
    const k = f(b)

    return Object.assign(a, {
      [k]: a[k] ? a[k] + 1 : 1
    })
  }, {})
}

module.exports = curry(2, countBy)
