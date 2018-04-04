const curry = require('./curry')

function gt (a, b) {
  return b > a
}

module.exports = curry(2, gt)
