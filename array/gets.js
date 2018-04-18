const curry = require('../function/curry')

function gets (keys, arr) {
  return keys.map(k => arr[k])
}

module.exports = curry(2, gets)
