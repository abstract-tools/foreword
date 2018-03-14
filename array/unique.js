// unique :: Array a -> Array a
const unique = function unique (arr = []) {
  return arr.reduce((acc, a) => {
    return acc.includes(a) ? acc : [...acc, a];
  }, []);
};

module.exports = unique;
