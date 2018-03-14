const test = require('tape');
const divide = require('../../number/divide');

test('number divide', t => {
  const result = divide(2, 10);

  t.same(result, 5);
  t.end();
});
