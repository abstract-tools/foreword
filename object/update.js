const curry = require('../function/curry')

function update (a = {}, b = {}) {
  return Object.assign({}, b, a)
}

module.exports = curry(2, update)
