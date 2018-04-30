const curry = require('../function/curry')

function filter (arr, obj) {
  return arr.reduce((acc, a) => {
    return Object.assign(acc, {
      [a]: obj[a]
    })
  }, {})
}

module.exports = curry(2, filter)
