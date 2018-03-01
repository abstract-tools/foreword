// max :: Array a -> Maybe a
module.exports = arr => {
  return arr.concat().sort((a, b) => {
    return (a > b) ? -1 : (a < b) ? 1 : 0; 
  })[0];
};
