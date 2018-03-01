const test = require('tape');
const drop = require('../../array/drop');

test('array drop: drop first 3 elements from array', t => {
  const result = drop(3, [1,2,3,4,5]);

  t.same(result, [4,5]);
  t.end();
});
