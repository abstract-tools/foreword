// concat :: Array a -> Array a
const concat = function concat (arr = []) {
  return arr.reduce((acc, a) => acc.concat(a), []);
};

module.exports = concat;
