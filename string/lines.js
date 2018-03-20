// lines :: String -> Array String
function lines (str = '') {
  return str.trim().split(/[\n|\r]/)
}

module.exports = lines
