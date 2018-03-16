// words :: String -> Array String
const words = function words (str = '') {
  return str.trim().split(/\s+/)
}

module.exports = words
