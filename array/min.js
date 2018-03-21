// min :: Array a -> Maybe a
function min (arr = []) {
  return arr.reduce((a, b) => b < a ? b : a)
}

module.exports = min
