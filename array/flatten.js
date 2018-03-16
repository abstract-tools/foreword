// flatten :: Array (Array a) -> Array a
const flatten = function flatten (arr = []) {
  return arr.reduce((a, b) => {
    return a.concat(Array.isArray(b) ? flatten(b) : b)
  }, [])
}

module.exports = flatten
