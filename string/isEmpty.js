// isEmpty :: String -> Boolean
function isEmpty (str = '') {
  return !Boolean(str.length)
}

module.exports = isEmpty
