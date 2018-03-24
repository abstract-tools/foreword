// min :: Array a -> Maybe a
function min (arr = []) {
  return arr.reduce((a, b) => a <= b ? a : b)
}

module.exports = min
