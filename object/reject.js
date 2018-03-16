const curry = require('../function/curry');

// reject :: Array k -> Object k v -> Object k v
module.exports = curry(2, function reject (arr = [], obj = {}) {
  return Object.keys(obj).reduce((a, b) => {
    return arr.includes(b) ? a : Object.assign(a, {
      [b]: obj[b]
    })
  }, {})
})
