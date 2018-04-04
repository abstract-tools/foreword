const curry = require('../function/curry')

function reject (f, arr = []) {
  return arr.filter(v => !f(v))
}

module.exports = curry(2, reject)
