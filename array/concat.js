// concat :: Array (Array a) -> Array a
module.exports = arr => {
  return arr.reduce((acc, a) => acc.concat(a), []);
};
