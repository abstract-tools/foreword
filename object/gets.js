const curry = require('../function/curry')

function gets (keys, obj) {
  return keys.map(k => obj[k])
}

module.exports = curry(2, gets)
