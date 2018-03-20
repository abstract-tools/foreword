// flatten :: Array (Array a) -> Array a
function flatten (arr = []) {
  return arr.reduce((a, b) => {
    return a.concat(Array.isArray(b) ? flatten(b) : b)
  }, [])
}

module.exports = flatten
