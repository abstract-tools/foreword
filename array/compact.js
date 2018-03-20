// compact :: Array a -> Array a
function compact (arr = []) {
  return arr.filter(Boolean)
}

module.exports = compact
