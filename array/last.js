// last :: Array a -> Maybe a
function last (arr = []) {
  return arr[arr.length - 1]
}

module.exports = last
