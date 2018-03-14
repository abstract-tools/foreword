// lines :: String -> Array String
const lines = function lines (str = '') {
  return str.trim().split(/[\n|\r]/);
};

module.exports = lines;
