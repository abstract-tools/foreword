// max :: Array a -> Maybe a
function max (arr = []) {
  return arr.reduce((a, b) => b > a ? b : a)
}

module.exports = max
