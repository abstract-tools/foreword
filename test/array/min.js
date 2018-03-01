const test = require('tape');
const min = require('../../array/min');

test('array min: get lowest number in array', t => {
  const result = min([3,194,3,5,1,9]);

  t.same(result, 1);
  t.end();
});

test('array min: get lowest string in array', t => {
  const result = min(['cat','dog','ant']);

  t.same(result, 'ant');
  t.end();
});
