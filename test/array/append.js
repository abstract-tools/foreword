const test = require('tape');
const append = require('../../array/append');

test('array append: combines two arrays', t => {
  const result = append([3,4], [1,2]);

  t.same(result, [1,2,3,4]);
  t.end();
});
