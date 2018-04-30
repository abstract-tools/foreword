const curry = require('../function/curry')

function reject (arr, obj) {
  return Object.keys(obj).reduce((acc, k) => {
    return arr.includes(k) ? acc : Object.assign(acc, {
      [k]: obj[k]
    })
  }, {})
}

module.exports = curry(2, reject)
