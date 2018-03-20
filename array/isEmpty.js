// isEmpty :: Array a -> Boolean
function isEmpty (arr = []) {
  return !Boolean(arr.length)
}

module.exports = isEmpty
