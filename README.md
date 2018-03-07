# (a -> b)
A transformation library.

#### Why (a -> b)
Reading and understanding code can be difficult, and can be made more challenging when using functions that work on more than one data type.

In terms of readability, it's generally considered easier to understand that `A.filter` is working on an array than a more generic `filter`, which could be working on an array or an object. The ability to have the same function run in different contexts is powerful and good! However, if used excessively, it can potentially be more difficult to reason about what is happening at a given time.

For instance, `(a -> b)` will have no trouble adding functions for Map or Set in the future, while other libraries will need some form of type checking to support different types in their existing functions.

#### Goal
- `(a -> b)` is a smaller, core API, with the basic building blocks for data transformations.
- For an extended API, there is `(b -> c)`, which includes the core.
- All functions are able to be partially applied.

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

### andThen :: (a -> b) -> Maybe a -> Maybe b
Applies function to value, if value exists, or returns value.
```javascript
> F.andThen(N.add(1), 1)
2

> F.andThen(N.add(1), undefined)
undefined
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

### curry :: ((a, b) -> c) -> a -> b -> c
Wraps a function and allows you to supply your arguments one at a time.
```javascript
> const add = F.curry((a, b) => a + b)
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

### identity :: a -> a
Returns itself.
```javascript
> F.identity('a')
'a'

> A.filter(F.identity, [0, 1, null, 'test'])
[ 1, 'test' ]
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

### thrush :: a -> (a -> b) -> b
Applies a function to a value, essentially flipping the argument order of `apply`.
```javascript
> A.map(F.thrush(100), [N.add(1), Math.sqrt])
[ 101, 10 ]
```

### withDefault :: a -> Maybe a -> a
Returns the first value, if the second does not exist.
```javascript
> F.withDefault(1, undefined)
1

> F.withDefault(1, 10)
10
```

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

### concat :: Array (Array a) -> Array a
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
> S.drop(3, 'mmmhmmm');
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

### div :: Number -> Number -> Number
Divides two numbers.
```javascript
> N.div(2, 10)
5
```

### mul :: Number -> Number -> Number
Multiplies two numbers.
```javascript
> N.mul(2, 5)
10
```

### sub :: Number -> Number -> Number
Subtracts two numbers.
```javascript
> N.sub(2, 10)
8
```
