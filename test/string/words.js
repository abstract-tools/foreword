const test = require('tape');
const words = require('../../string/words');

test('string words: return array of words', t => {
  const result = words('foo bar baz');

  t.same(result, ['foo','bar','baz']);
  t.end();
});
