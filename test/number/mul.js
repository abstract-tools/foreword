const test = require('tape');
const mul = require('../../number/mul');

test('number mul: multiply', t => {
  const result = mul(2, 5);

  t.same(result, 10);
  t.end();
});
