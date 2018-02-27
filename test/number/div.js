const test = require('tape');
const div = require('../../number/div');

test('number div: divide', t => {
  const result = div(2, 10);

  t.same(result, 5);
  t.end();
});
