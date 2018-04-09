const curry = require('../function/curry')

function reject (arr, obj) {
  return Object.keys(obj).reduce((a, k) => {
    return arr.includes(k) ? a : Object.assign(a, {
      [k]: obj[k]
    })
  }, {})
}

module.exports = curry(2, reject)
