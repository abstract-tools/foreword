// reverse :: String -> String
const reverse = function reverse (str = '') {
  return str.split('').reverse().join('');
};

module.exports = reverse;
