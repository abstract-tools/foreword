// unique :: Array a -> Array a
const unique = function unique (arr = []) {
  return arr.reduce((acc, a) => {
    return acc.includes(a) ? acc : acc.concat(a);
  }, []);
};

module.exports = unique;
