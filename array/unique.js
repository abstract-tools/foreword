// unique :: Array a -> Array a
module.exports = arr => {
  return arr.reduce((acc, a) => {
    return acc.includes(a) ? acc : acc.concat(a);
  }, []);
};
