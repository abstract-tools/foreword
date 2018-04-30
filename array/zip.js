const curry = require('../function/curry')

function zip (a, b) {
  const arr = a.length < b.length ? a : b

  return arr.reduce((acc, _, i) => {
    return Object.assign(acc, {
      [a[i]]: b[i]
    })
  }, {})
}

module.exports = curry(2, zip)
