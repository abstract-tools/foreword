// words :: String -> Array String
function words (str = '') {
  return str.trim().split(/\s+/)
}

module.exports = words
