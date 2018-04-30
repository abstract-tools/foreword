const curry = require('../function/curry')

function ap (fs, arr) {
  return fs.reduce((acc, f) => {
    return acc.concat(arr.map(f))
  }, [])
}

module.exports = curry(2, ap)
