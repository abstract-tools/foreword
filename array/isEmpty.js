// isEmpty :: Array a -> Boolean
const isEmpty = function isEmpty (arr = []) {
  return !Boolean(arr.length)
}

module.exports = isEmpty
