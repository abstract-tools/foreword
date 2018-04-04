const curry = require('../function/curry')

function filter (arr = [], obj = {}) {
  return arr.reduce((a, b) => {
    return Object.assign(a, {
      [b]: obj[b]
    })
  }, {})
}

module.exports = curry(2, filter)
