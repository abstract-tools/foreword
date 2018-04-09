const curry = require('../function/curry')

function divide (a, b) {
  return b / a
}

module.exports = curry(2, divide)
