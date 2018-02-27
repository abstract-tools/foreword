const test = require('tape');
const compose = require('../../function/compose');

test('function compose: compose two functions', t => {
  const result = compose(Math.sqrt, x => x + 1);

  t.same(result(99), 10);
  t.end();
});
