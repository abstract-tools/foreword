const curry = require('../function/curry')

function divide (a = 0, b = 0) {
  return b / a
}

module.exports = curry(2, divide)
