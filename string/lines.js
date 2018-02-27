// lines :: String -> Array String
module.exports = str => {
  return str.trim().split(/[\n|\r]/);
};
