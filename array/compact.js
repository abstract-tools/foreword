// compact :: Array a -> Array a
const compact = function compact (arr = []) {
  return arr.filter(Boolean)
}

module.exports = compact
