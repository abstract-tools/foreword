// isEmpty :: String -> Boolean
const isEmpty = function isEmpty (str = '') {
  return !Boolean(str.length)
}

module.exports = isEmpty
