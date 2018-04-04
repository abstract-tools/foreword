const curry = require('../function/curry')

function includes (str = '', obj = {}) {
  return Object.keys(obj).includes(str)
}

module.exports = curry(2, includes)
