// last :: Array a -> Maybe a
const last = function last (arr = []) {
  return arr[arr.length - 1]
}

module.exports = last
