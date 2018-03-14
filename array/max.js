// max :: Array a -> Maybe a
const max = function max (arr = []) {
  return [...arr].sort((a, b) => {
    return (a > b) ? -1 : (a < b) ? 1 : 0;
  })[0];
};

module.exports = max;
