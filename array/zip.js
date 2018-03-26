const curry = require('../function/curry')

// zip :: Array a -> Array b -> Array (a, b)
function zip (a = [], b = []) {
  const arr = a.length < b.length ? a : b

  return arr.reduce((x, _, i) => {
    return Object.assign(x, {
      [a[i]]: b[i]
    })
  }, {})
}

module.exports = curry(2, zip)
