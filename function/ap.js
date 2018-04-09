const curry = require('../function/curry')

function ap (fs, arr) {
  return fs.reduce((a, f) => {
    return a.concat(arr.map(f))
  }, [])
}

module.exports = curry(2, ap)
