const curry = require('../function/curry')

// where :: Object k (a -> Boolean) -> Object k v -> Boolean
const where = curry(2, function where (spec = {}, obj = {}) {
  return Object.keys(spec).every(k => {
    return spec[k](obj[k])
  })
})

module.exports = where
