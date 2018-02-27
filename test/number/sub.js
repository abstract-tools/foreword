const test = require('tape');
const sub = require('../../number/sub');

test('number sub: subtract', t => {
  const result = sub(1, 10);

  t.same(result, 9);
  t.end();
});
