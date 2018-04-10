const curry = require('../function/curry')

function has (str, obj) {
  return Object.keys(obj).includes(str)
}

module.exports = curry(2, has)
