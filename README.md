# (a -> b)
A standard library for data transformation.
`npm install @bchar/a-to-b`

#### Why (a -> b)
Reading and understanding code can be difficult, and can be made more challenging when using functions that work on more than one data type.

In terms of readability, it's generally considered easier to understand that `A.filter` is working on an array than a more generic `filter`, which could be working on an array or an object. The ability to have the same function run in different contexts is powerful and good! However, if used excessively, it can potentially be more difficult to reason about what is happening at a given time.

For instance, `(a -> b)` will have no trouble adding functions for Map or Set in the future.

#### Goal
- `(a -> b)` is a smaller, core API, with the basic building blocks for data transformations.
- For an extended API, there is `(b -> c)`, which includes the core.
- All functions are able to be partially applied.

## Array
```javascript
const A = require('@bchar/a-to-b/array')
```

### append :: Array a -> Array a -> Array a
Combines two arrays.
```javascript
> A.append([4], [1, 2, 3])
[ 1, 2, 3, 4 ]
```

### concat :: Array a -> Array a
Concatenate an array of arrays into a single array, removing one level of nesting.
```javascript
> A.concat([[1, 2], [3], [4, 5]])
[ 1, 2, 3, 4, 5 ]
```

### drop :: Number -> Array a -> Array a
Drops the first n elements in an array.
```javascript
> A.drop(2, [1, 2, 3, 4, 5])
[ 3, 4, 5 ]
```

### every :: (a -> Boolean) -> Array a -> Boolean
Determines if every element satisfies the predicate.
```javascript
> A.every(F.equals(1), [1, 1, 1])
true

> A.every(F.equals('a'), ['a', 'b', 'c'])
false
```

### filter :: (a -> Boolean) -> Array a -> Array a
Returns an array of every element that matches the predicate.
```javascript
> A.filter(F.equals(1), [1, 2, 3])
[ 1 ]
```

### find :: (a -> Boolean) -> Array a -> Maybe a
Returns the value of the first element that matches the predicate, or `undefined` if it does not exist.
```javascript
> A.find(F.equals(1), [1, 2, 3])
1
```

### head :: Array a -> Maybe a
Returns the first element in an array.
```javascript
> A.head([1, 2, 3, 4, 5])
1

> A.head([])
undefined
```

### includes :: a -> Array a -> Boolean
Determines if an array contains a value.
```javascript
> A.includes('a', ['a', 'b', 'c'])
true
```

### isEmpty :: Array a -> Boolean
Determines if an array contains any elements.
```javascript
> A.isEmpty([1])
false
```

### length :: Array a -> Number
Returns the number of elements in an array.
```javascript
> A.length([1, 2, 3])
3
```

### map :: (a -> b) -> Array a -> Array b
Applies a function over every element in an array.
```javascript
> A.map(O.get('a'), [{a: 1}, {a: 2}, {a: 3}])
[ 1, 2, 3 ]
```

### max :: Array a -> Maybe a
Returns the highest value element in an array.
```javascript
> A.max([1, 2, 3])
3
```

### min :: Array a -> Maybe a
Returns the lowest value element in an array.
```javascript
> A.min([3, 2, 1])
1
```

### reduce :: (a -> b -> b) -> b -> Array a -> b
Applies a function over an accumulator and every element in an array, returning the result as a single value.
```javascript
> A.reduce(N.add, 0, [1, 2, 3])
6
```
 
### reverse :: Array a -> Array a
Returns a new array with the elements in reverse order.
```javascript
> A.reverse([1, 2, 3])
[ 3, 2, 1 ]
```

### slice :: Number -> Number -> Array a -> Array a
Returns a subset of an array, providing starting and ending indexes.
```javascript
> A.slice(1, 3, [1, 2, 3, 4, 5])
[ 2, 3 ]
```

### some :: (a -> Boolean) -> Array a -> Boolean
Determines if any elements match the predicate.
```javascript
> A.some(F.equals(1), [1, 2, 3])
true
```

### sort :: ((a, a) -> Number) -> Array a -> Array a
Returns a sorted array, given a comparison function.
```javascript
> A.sort((a, b) => a - b, [5, 39, 1])
[ 1, 5, 39 ]
```

### tail :: Array a -> Array a
Returns every element except the first.
```javascript
> A.tail([1, 2, 3, 4, 5])
[ 2, 3, 4, 5 ]
```

### take :: Number -> Array a -> Array a
Returns the first n elements in an array.
```javascript
> A.take(2, [1, 2, 3, 4, 5])
[ 1, 2 ]
```

### unique :: Array a -> Array a
Returns a list of unique elements.
```javascript
> A.unique([1, 1, 1, 3, 5, 5, 9])
[ 1, 3, 5, 9 ]
```

## Function
```javascript
const F = require('@bchar/a-to-b/function')
```

### always :: a -> b -> a
Returns its first argument.
```javascript
> F.always('a', 'b')
'a'
```

### and :: Boolean -> Boolean -> Boolean
Returns `true` if both values are `true`.
```javascript
> F.and(true, false)
false
```

### apply :: (a -> b) -> a -> b
Applies function to value.
```javascript
> F.apply(N.add(1), 1)
2
```

### complement :: (a -> Boolean) -> a -> Boolean
Returns the opposite boolean value that the predicate returned.
```javascript
> F.complement(F.equals(1), 1)
false
```

### compose :: (b -> c) -> (a -> b) -> a -> c
Applies value through two functions, from right to left.
```javascript
> F.compose(Math.sqrt, N.add(1), 99)
10
```

### curry :: Number -> ((a, b) -> c) -> a -> b -> c
Wraps a function and allows you to supply your arguments one at a time.
```javascript
> const add = F.curry(2, (a, b) => a + b)
> const add1 = add(1)
> add1(1)
2
```

### equals :: a -> a -> Boolean
Returns the result of comparing two values.
```javascript
> F.equals('abc', 'abc')
true

> F.equals('abc', 'xyz')
false
```

### flip :: (a -> b -> c) -> b -> a -> c
Reverses the order of the first two arguments of the provided function.
```javascript
> const prepend = F.flip(A.append)
> prepend([1], [2, 3, 4])
[ 1, 2, 3, 4 ]
```

### gt :: a -> a -> Boolean
Determines if a value is greater.
```javascript
> gt(1, 2)
true
```

### gte :: a -> a -> Boolean
Determines if a value is greater than or equal.
```javascript
> gte(1, 1)
true
> gte(1, 2)
true
```

### identity :: a -> a
Returns itself.
```javascript
> F.identity('a')
'a'

> A.filter(F.identity, [0, 1, null, 'test'])
[ 1, 'test' ]
```

### lt :: a -> a -> Boolean
Determines if a value is lesser.
```javascript
> lt(2, 1)
true
```

### lte :: a -> a -> Boolean
Determines if a value is less than or equal.
```javascript
> lte(1, 1)
true
> lte(2, 1)
true
```

### not :: Boolean -> Boolean
Returns the opposite boolean value.
```javascript
> F.not(true)
false

> F.not(A.some(F.equals(1), [1, 2, 3]))
false
```

### or :: Boolean -> Boolean -> Boolean
Returns `true` if one or both values are `true`.
```javascript
> F.or(true, false)
true
```

### pipe :: Array (a -> b) -> a -> b
Applies a sequence of transformations over a value.
```javascript
> F.pipe([N.add(1), Math.sqrt], 99)
10
```

## Maybe
A set of functions for dealing with possible `undefined` values.
```javascript
const M = require('@bchar/a-to-b/maybe')
```

### andThen :: (a -> Maybe b) -> Maybe a -> Maybe b
Applies function to value, if value exists, or returns value.
```javascript
> M.andThen(N.add(1), 1)
2

> M.andThen(N.add(1), undefined)
undefined

> F.pipe([
  M.andThen(A.head),
  M.andThen(N.multiply(2)),
  M.andThen(N.isEven)
], [])
undefined
```

### withDefault :: a -> Maybe a -> a
Returns the first value, if the second does not exist.
```javascript
> M.withDefault(1, undefined)
1

> M.withDefault(1, 10)
10
```

## Number
```javascript
const N = require('@bchar/a-to-b/number')
```

### add :: Number -> Number -> Number
Adds two numbers.
```javascript
> N.add(2, 2)
4
```

### divide :: Number -> Number -> Number
Divides two numbers.
```javascript
> N.divide(2, 10)
5
```

### isEven :: Number -> Boolean
Determines if a number is even.
```javascript
> N.isEven(10)
true
```

### isOdd :: Number -> Boolean
Determines if a number is odd.
```javascript
> N.isOdd(9)
true
```

### max :: Number -> Number -> Number
Returns the larger number.
```javascript
> max(4, 9)
9
```

### min :: Number -> Number -> Number
Returns the smaller number.
```javascript
> min(4, 9)
4
```

### multiply :: Number -> Number -> Number
Multiplies two numbers.
```javascript
> N.multiply(2, 5)
10
```

### subtract :: Number -> Number -> Number
Subtracts two numbers.
```javascript
> N.subtract(2, 10)
8
```

## Object
```javascript
const O = require('@bchar/a-to-b/object')
```

### get :: k -> Object k v -> Maybe v
Returns the property of an object, if it exists.
```javascript
> O.get('a', { a: 'test' })
'test'

> A.map(O.get('a'), [{ a: 1}, { a: 2 }, { a: 3 }])
[ 1, 2, 3 ]
```

### includes :: k -> Object k v -> Boolean
Determines if an object contains a key.
```javascript
> O.includes('a', { a: 1, b: 2 })
true
```

### isEmpty :: Object k v -> Boolean
Determines if an object contains any keys.
```javascript
> O.isEmpty({})
true
```

### keys :: Object k v -> Array k
Returns an array of every key in an object.
```javascript
> O.keys({ a: 1, b: 2 })
[ 'a', 'b' ]
```

### map :: Object k (a -> b) -> Object k a -> Object k b
Returns an object with transformations applied over specified keys.
```javascript
> O.map({ ms: N.inc }, { id: 123, ms: 999 })
{ id: 123, ms: 1000 }
``` 

### update :: Object k v -> Object k v -> Object k v
Creates a new object with values from the first argument merged over the second argument.
```javascript
> O.update({ a: true }, { a: false })
{ a: true }
```

### values :: Object k v -> Array v
Returns an array of every value in an object.
```javascript
> O.values({ a: 1, b: 2 })
[ 1, 2 ]
```

## String
```javascript
const S = require('@bchar/a-to-b/string')
```

### append :: String -> String -> String
Combine two strings.
```javascript
> S.append('ing', 'append')
'appending'
```

### chars :: String -> Array String
Returns an array of every character in a string.
```javascript
> S.chars('hello!')
[ 'h', 'e', 'l', 'l', 'o', '!' ]
```

### concat :: Array String -> String
Combines a list of strings into one string.
```javascript
> S.concat(['a', 'b', 'c'])
'abc'
```

### drop :: Number -> String -> String
Drops the first n elements in a string.
```javascript
> S.drop(3, 'mmmhmmm')
'hmmm'
```

### includes :: String -> String -> Boolean
Determines if a string contains a substring.
```javascript
> S.includes('abc', 'abcdef')
true
```

### isEmpty :: String -> Boolean
Determines if a string contains any characters.
```javascript
> S.isEmpty('abc')
false
```

### join :: String -> Array String -> String
Joins every element in an array with a string, creating a single string.
```javascript
> S.join(':', ['a', 'b', 'c'])
'a:b:c'
```

### length :: String -> Number
Returns the number of values in a string.
```javascript
> S.length('abc')
3
```

### lines :: String -> Array String
Creates an array from a string that might contain line breaks.
```javascript
> S.lines('foo\nbar\nbar')
[ 'foo', 'bar', 'baz' ]
```

### reverse :: String -> String
Reverses the order of a string.
```javascript
> S.reverse('abc')
'cba'
```

### slice :: Number -> Number -> String -> String
Returns a subset of a string, given starting and ending indexes.
```javascript
> S.slice(1, 3, 'abcdef')
'bc'
```

### split :: String -> String -> Array String
Splits a string into an array of substrings.
```javascript
> S.split(':', 'a:b:c')
[ 'a', 'b', 'c' ]
```

### take :: Number -> String -> String
Returns the first n elements in a string.
```javascript
> S.take(3, 'mmmhmmm')
'mmm'
```

### toLower :: String -> String
Returns an all lowercase string.
```javascript
> S.toLower('ABCDEF')
'abcdef'
```

### toUpper :: String -> String
Returns an all uppercase string.
```javascript
> S.toUpper('abcdef')
'ABCDEF'
```

### trim :: String -> String
Removes whitespace from both ends of a string.
```javascript
> S.trim('   a \n')
'a'
```

### words :: String -> Array String
Returns an array containing word groups in a string.
```javascript
> S.words('foo bar baz')
[ 'foo', 'bar', 'baz' ]
```
